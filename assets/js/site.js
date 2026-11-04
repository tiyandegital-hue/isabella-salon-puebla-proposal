/* ============================================================
   Isabella Salón — propuesta de contenido (Tiyan Digital)
   SITE_NAME: única constante para el nombre del negocio.
   Para reutilizar esta propuesta con otro salón, cambia el valor
   de abajo: todos los elementos con class="site-name" se actualizan.
   ============================================================ */
const SITE_NAME = "Isabella Salón";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Nombre del negocio como constante única (con fallback en el HTML si JS falla)
  document.querySelectorAll(".site-name").forEach((el) => {
    el.textContent = SITE_NAME;
  });
  document.title = document.title.replace(/Isabella Salón/g, SITE_NAME);

  // 2. Menú móvil
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  // 3. Reveals al hacer scroll (con fallback visible si JS/IO falla)
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  document.querySelectorAll(".reveal, .reveal-mask").forEach((el) => io.observe(el));
  // Seguridad: si IO no dispara en 3s, mostrar todo (nada queda invisible)
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.in), .reveal-mask:not(.in)").forEach((el) =>
      el.classList.add("in")
    );
  }, 3000);

  // 4. Año dinámico en el footer
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // 5. Formulario de contacto → abre el correo con el mensaje listo
  //    (sitio estático: sin backend; el mensaje se arma en el cliente)
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const nombre = form.nombre.value.trim();
      const tel = form.telefono.value.trim();
      const msg = form.mensaje.value.trim();
      if (!nombre || !msg) return;
      const subject = encodeURIComponent("Propuesta de contenido — " + nombre);
      const body = encodeURIComponent(
        "Hola Tiyan Digital,\n\nVi la propuesta de contenido para " + SITE_NAME + " y me interesa.\n\n" +
        "Nombre: " + nombre + "\n" +
        "Teléfono/WhatsApp: " + (tel || "—") + "\n\n" +
        "Mensaje:\n" + msg
      );
      window.location.href = "mailto:contact@tiyandegital.com?subject=" + subject + "&body=" + body;
      document.getElementById("form-ok").classList.add("show");
    });
  }
});

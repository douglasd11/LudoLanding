import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmit } from "@formspree/react";

const FORMSPREE_ID = "xlggjkzl";

const formSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, "El nombre es obligatorio")
    .min(3, "Escriba su nombre completo"),
  correo: z.string().trim().min(1, "El correo es obligatorio").email("Correo inválido"),
  numero: z
    .string()
    .trim()
    .min(1, "El número es obligatorio")
    .min(7, "Número inválido")
    .max(15, "Número inválido")
    .regex(/^[0-9+()\s-]+$/, "Número inválido"),
  asunto: z.string().trim().min(1, "El mensaje es obligatorio").min(5, "Mensaje muy corto"),
});

export default function FormApplication() {
  const msgRef = useRef(null);
  const timeoutRef = useRef(null);

  const [serverMsg, setServerMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: { nombre: "", correo: "", numero: "", asunto: "" },
  });

  const showMessage = (text) => {
    setServerMsg(text);

    const el = msgRef.current;
    if (!el) return;

    el.style.opacity = "1";
    el.style.transition = "opacity 0.2s ease-in-out";

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      el.style.opacity = "0";
    }, 3000);
  };

  // Hook de Formspree para integrarte con RHF :contentReference[oaicite:3]{index=3}
  const submitToFormspree = useSubmit(FORMSPREE_ID, {
    onError(errs) {
      // Errores generales
      const formErrs = errs.getFormErrors?.() ?? [];
      for (const { code, message } of formErrs) {
        setError(`root.${code}`, { type: code, message });
      }

      // Errores por campo (si Formspree responde validaciones server-side)
      const fieldErrs = errs.getAllFieldErrors?.() ?? [];
      for (const [field, ferrs] of fieldErrs) {
        const msg = ferrs.map((e) => e.message).join(", ");

        // Mapeo si Formspree devuelve nombres distintos a tus campos:
        if (field === "email") setError("correo", { message: msg });
        else if (field === "message") setError("asunto", { message: msg });
        else if (field === "name") setError("nombre", { message: msg });
        else if (field === "phone") setError("numero", { message: msg });
        else setError(field, { message: msg }); // fallback
      }

      showMessage("Revisa los datos e intenta de nuevo.");
    },
  });

  const onSubmit = async (formData) => {
    try {
      // Payload recomendado para que Formspree setee Reply-To y Subject:
      // - "email" para Reply-To :contentReference[oaicite:4]{index=4}
      // - "subject" para asunto :contentReference[oaicite:5]{index=5}
      const payload = {
        ...formData,

        // Campos “convenientes” para Formspree/email:
        email: formData.correo,
        message: formData.asunto,
        subject: `Nueva solicitud desde el formulario Ludonex`,

        // Opcional: alias
        name: formData.nombre,
        phone: formData.numero,
      };

      await submitToFormspree(payload);

      showMessage("Gracias por enviar su solicitud, pronto estaremos en contacto.");
      reset();
    } catch (e) {
      showMessage("Ocurrió un error enviando la solicitud. Intenta de nuevo.");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h4>Solicitudes y dudas</h4>

      <div className="form-control">
        <label>Nombre completo</label>
        <input type="text" placeholder="Nombre completo" {...register("nombre")} />
        <span style={{ color: "red" }}>{errors.nombre?.message}</span>
      </div>

      <div className="form-control">
        <label>Correo electrónico</label>
        <input type="email" placeholder="Correo electrónico" {...register("correo")} />
        <span style={{ color: "red" }}>{errors.correo?.message}</span>
      </div>

      <div className="form-control">
        <label>Número de celular</label>
        <input type="tel" placeholder="Número de celular" {...register("numero")} />
        <span style={{ color: "red" }}>{errors.numero?.message}</span>
      </div>

      <div className="form-control">
        <label>Asunto / mensaje</label>
        <input type="text" placeholder="Mensaje" {...register("asunto")} />
        <span style={{ color: "red" }}>{errors.asunto?.message}</span>
      </div>

      <p className="text">Recuerde llenar todos los campos</p>

      {/* Errores generales (root) */}
      {errors.root && (
        <div style={{ color: "red", marginTop: 8 }}>
          {Object.values(errors.root).map((err) =>
            typeof err === "object" ? err.message : String(err)
          )}
        </div>
      )}

      <button type="submit" disabled={isSubmitting}>
        <p>{isSubmitting ? "Enviando..." : "Enviar"}</p>
      </button>

      <div className="box-msg">
        <p
          ref={msgRef}
          style={{
            opacity: 0,
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          {serverMsg || " "}
        </p>
      </div>
    </form>
  );
}

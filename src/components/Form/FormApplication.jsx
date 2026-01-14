import React, { useRef, useState } from "react";
import clienteAxios from "../../config/axios";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      nombre: "",
      correo: "",
      numero: "",
      asunto: "",
    },
  });

  const showMessage = (text) => {
    setServerMsg(text);

    const el = msgRef.current;
    if (!el) return;

    el.style.opacity = "1";

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      el.style.opacity = "0";
      el.style.transition = "opacity 0.2s ease-in-out";
    }, 3000);
  };

  const onSubmit = async (formData) => {
    try {
      await clienteAxios.post("/solicitud/agregar", formData);
      showMessage("Gracias por enviar su solicitud, pronto estaremos en contacto.");
      reset(); // limpia todos los campos
    } catch (e) {
      showMessage("Ocurrió un error enviando la solicitud. Intenta de nuevo.");
      // console.error(e);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h4>Solicitudes y dudas</h4>

      <div className="form-control">
        <label>Nombre completo</label>
        <input
          type="text"
          placeholder="Nombre completo"
          {...register("nombre")}
        />
        <span style={{ color: "red" }}>{errors.nombre?.message}</span>
      </div>

      <div className="form-control">
        <label>Correo electronico</label>
        <input
          type="email"
          placeholder="Correo electronico"
          {...register("correo")}
        />
        <span style={{ color: "red" }}>{errors.correo?.message}</span>
      </div>

      <div className="form-control">
        <label>Numero de celular</label>
        <input
          type="tel"
          placeholder="Numero de celular"
          {...register("numero")}
        />
        <span style={{ color: "red" }}>{errors.numero?.message}</span>
      </div>

      <div className="form-control">
        <label>Asunto / mensaje</label>
        <input
          type="text"
          placeholder="Mensaje"
          {...register("asunto")}
        />
        <span style={{ color: "red" }}>{errors.asunto?.message}</span>
      </div>

      <p className="text">Recuerde llenar todos los campos</p>

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

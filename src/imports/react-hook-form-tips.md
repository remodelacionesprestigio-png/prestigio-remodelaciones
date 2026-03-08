En tu código tienes:

import { useForm, SubmitHandler } from 'react-hook-form';

Pero no aparece ningún onSubmit definido en lo que se ve.

Debería existir algo así:

const onSubmit: SubmitHandler<FormInputs> = (data) => {
  console.log(data);
};

y el form:

<form onSubmit={handleSubmit(onSubmit)}>

Si no existe → el submit nunca hace nada.

2️⃣ No se ve ningún <form>

En la captura solo aparece lógica:

const {
  register,
  handleSubmit,
  watch,
  formState: { errors },
} = useForm<FormInputs>();

Pero si no tienes esto en el return, no funciona:

<form onSubmit={handleSubmit(onSubmit)}>
3️⃣ Inputs sin register

Cada input debe tener esto:

<input {...register("nombre")} />

Ejemplo real:

<input
  type="text"
  placeholder="Nombre"
  {...register("nombre", { required: true })}
/>

{errors.nombre && <span>Nombre requerido</span>}
4️⃣ Ojo con watch()

Esto no rompe nada, pero puede devolver undefined al inicio:

const areaConstruccion = watch('areaConstruccion');

Cuando calculas:

const area = parseFloat(areaConstruccion);

puede salir NaN.

Mejor:

const area = parseFloat(areaConstruccion || "0");
5️⃣ Posible error del modal

Tu componente se llama:

ConsultaModal

y depende de:

isOpen

Si isOpen es false, el formulario nunca aparece.

🧠 Extra (detalle pro que vi)

Estás importando:

import { motion, AnimatePresence } from 'motion/react';

Pero normalmente es:

import { motion, AnimatePresence } from 'framer-motion';

Si usas motion/react puede romper dependiendo del setup.
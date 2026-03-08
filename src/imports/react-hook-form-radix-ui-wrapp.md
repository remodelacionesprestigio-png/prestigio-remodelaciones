🧠 Qué es este archivo realmente

Este archivo no es el formulario, es solo un wrapper de UI para React Hook Form usando componentes de Radix UI.

Es básicamente el patrón que usan librerías tipo shadcn/ui.

Este archivo solo crea helpers como:

Form

FormField

FormItem

FormLabel

FormControl

FormMessage

Pero no maneja el submit ni los inputs por sí solo.

🚨 El problema más común con este patrón

Para que funcione DEBES envolver todo con FormProvider.

Tú exportas esto:

const Form = FormProvider;

Pero si no haces esto en tu componente principal, todo falla:

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>

Ejemplo correcto 👇

const form = useForm<FormInputs>()

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    
    <FormField
      control={form.control}
      name="nombre"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Nombre</FormLabel>
          <FormControl>
            <input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

  </form>
</Form>

Si no usas <Form {...form}>, esto explota:

useFormContext()

porque no existe contexto.

⚠️ Otro bug potencial que veo

Aquí:

const fieldContext = React.useContext(FormFieldContext);

Tu validación es:

if (!fieldContext) {
  throw new Error("useFormField should be used within <FormField>");
}

Pero el contexto se creó así:

React.createContext({} as FormFieldContextValue)

Eso nunca será null, así que ese check no sirve.

La forma correcta sería:

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

y luego:

if (!fieldContext) {
  throw new Error(...)
}

Pero esto no rompe tu form, solo es mala práctica.

🚨 Donde probablemente está tu bug real

Basado en todo lo que mostraste antes, apuesto a uno de estos:

1️⃣ No estás pasando control

Debe ser:

<FormField control={form.control} name="nombre" />
2️⃣ No estás usando render

Controller requiere render.

Debe ser:

render={({ field }) => (
  <input {...field} />
)}
3️⃣ No usaste <FormProvider>

Debe existir esto:

<Form {...form}>
🔎 Si quieres que te diga EXACTAMENTE dónde está el bug

Pásame el archivo donde usas esto:

ConsultaModal.tsx

especialmente el return() donde está el <form>.

Porque por lo que veo en tu proyecto:

usas React Hook Form

Radix

motion

modal

y hay un bug clásico con modales + forms que hace que el submit nunca dispare.
'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string().min(3, 'Informe seu nome'),
  lastName: z.string().min(3, 'Informe seu sobrenome'),
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(3, 'Informe a senha'),
})

type FormData = z.infer<typeof schema>

export default function SignUp() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  })

  const handleSubmit = form.handleSubmit((formData) => {
    console.log(formData)
  })

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">Cadastre-se</CardTitle>

        <CardDescription>
          Crie sua conta e comece a usar agora mesmo!
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primeiro nome</FormLabel>

                    <FormControl>
                      <Input placeholder="Joe" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>

                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="email@email.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="*********"
                      autoComplete="new-password"
                      type="password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Criar conta
            </Button>

            <Button variant="outline" className="w-full" type="button">
              Criar conta com o Google
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm">
          Já possui conta?{' '}
          <Link href="/sign-in" className="underline">
            Acesse agora
          </Link>
          !
        </div>
      </CardContent>
    </Card>
  )
}

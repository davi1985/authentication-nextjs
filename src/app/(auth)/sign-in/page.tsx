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
  email: z.string().email('Informe um e-mail válido'),
  password: z.string().min(3, 'Informe a senha'),
})

type FormData = z.infer<typeof schema>

export default function SignIn() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleSubmit = form.handleSubmit((formData) => {
    console.log(formData)
  })

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Acesse sua conta</CardTitle>

        <CardDescription>
          Faça login para continuar usando a plataforma
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="email@email.com"
                      autoComplete="current-password"
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
                  <div className="flex items-center">
                    <FormLabel>Senha</FormLabel>

                    <Link
                      href={'#'}
                      className="ml-auto inline-block text-sm underline"
                    >
                      Esqueci minha senha
                    </Link>
                  </div>

                  <FormControl>
                    <Input
                      placeholder="*********"
                      type="password"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Entrar
            </Button>

            <Button type="button" variant="outline" className="w-full">
              Entrar com o Google
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-center text-sm">
          Não tem uma conta?{' '}
          <Link href="/sign-up" className="underline">
            Cadastre-se
          </Link>
          !
        </div>
      </CardContent>
    </Card>
  )
}

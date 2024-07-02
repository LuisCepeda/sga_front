
import { ProjectDataProvider } from "@/context/projectContext";
import dynamic from "next/dynamic";
import Link from "next/link"

// const DynamicMap = dynamic(() => import('../components/MapView'), { ssr: false, loading: () => <p>Cargando mapa...</p> })

export default function Home() {
  return (
    <>

      <div className="flex flex-col min-h-[100dvh]">


        <main className="flex-1">
          <section className="w-full py-8 md:py-16 lg:py-20 bg-cover bg-center">
            <div className="container px-4 md:px-6 text-center">
              <div className="max-w-2xl mx-auto space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                  Reforestación: Salvando nuestro planeta
                </h1>
                <p className="text-xl text-muted-foreground">
                  Descubre cómo los proyectos de reforestación están transformando comunidades y protegiendo el medio
                  ambiente.
                </p>
                <Link
                  href="/dashboard"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Explora el sitio
                </Link>
              </div>
            </div>
          </section>
          <section id="beneficios" className="w-full py-8 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Beneficios Ambientales</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Restaurando el equilibrio natural</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    La reforestación ayuda a absorber el dióxido de carbono, regular el clima, prevenir la erosión del
                    suelo y proporcionar hábitat para la vida silvestre. Cada árbol plantado es un paso hacia un futuro
                    más sostenible.
                  </p>
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-md p-4 text-center">
                      <h3 className="text-2xl font-bold">1 millón</h3>
                      <p className="text-muted-foreground">Toneladas de CO2 absorbidas por año</p>
                    </div>
                    <div className="bg-muted rounded-md p-4 text-center">
                      <h3 className="text-2xl font-bold">100 mil</h3>
                      <p className="text-muted-foreground">Hectáreas de bosque restauradas</p>
                    </div>
                  </div> */}
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Beneficios Sociales</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Empoderando a las comunidades</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Los proyectos de reforestación crean empleos, mejoran la calidad de vida y fortalecen los lazos
                    comunitarios. Al involucrar a las personas locales, se genera un sentido de propiedad y
                    responsabilidad hacia los bosques.
                  </p>
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-md p-4 text-center">
                      <h3 className="text-2xl font-bold">50 mil</h3>
                      <p className="text-muted-foreground">Empleos generados en comunidades</p>
                    </div>
                    <div className="bg-muted rounded-md p-4 text-center">
                      <h3 className="text-2xl font-bold">80%</h3>
                      <p className="text-muted-foreground">Aumento en ingresos familiares</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          <section id="impacto" className="w-full py-8 md:py-16 lg:py-20 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Impacto Económico</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Crecimiento sostenible</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    La reforestación genera nuevas oportunidades económicas, como la producción de madera, frutos y otros
                    productos forestales. Además, atrae inversiones y turismo, lo que impulsa el desarrollo local.
                  </p>
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-md p-4 text-center">
                      <h3 className="text-2xl font-bold">$5 mil millones</h3>
                      <p className="text-muted-foreground">Ingresos anuales generados</p>
                    </div>
                    <div className="bg-background rounded-md p-4 text-center">
                      <h3 className="text-2xl font-bold">20%</h3>
                      <p className="text-muted-foreground">Aumento en el turismo local</p>
                    </div>
                  </div> */}
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nuestro Impacto</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transformando vidas</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nuestros proyectos de reforestación han tenido un impacto significativo en comunidades de todo el
                    mundo. Desde restaurar ecosistemas frágiles hasta empoderar a las personas locales, cada árbol
                    plantado hace una diferencia.
                  </p>
                  {/* <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background rounded-md p-4 text-center">
                      <h3 className="text-2xl font-bold">1 millón</h3>
                      <p className="text-muted-foreground">Árboles plantados hasta la fecha</p>
                    </div>
                    <div className="bg-background rounded-md p-4 text-center">
                      <h3 className="text-2xl font-bold">50</h3>
                      <p className="text-muted-foreground">Comunidades beneficiadas</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* <section id="accion" className="w-full py-8 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6 text-center">
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Únete a la causa</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sé parte del cambio</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Juntos podemos hacer una diferencia significativa en la protección de nuestro planeta. Únete a nuestros
                  proyectos de reforestación y ayuda a crear un futuro más sostenible.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Apoya un proyecto
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Únete como voluntario
                  </Link>
                </div>
              </div>
            </div>
          </section> */}
        </main>
        {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">&copy; 2024 Reforestación. Todos los derechos reservados.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Términos de Servicio
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacidad
            </Link>
          </nav>
        </footer> */}
      </div>




    </>

  );
}

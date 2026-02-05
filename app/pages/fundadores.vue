<script setup lang="ts">
import { Heart, Target, Users } from 'lucide-vue-next'
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div class="container relative z-10">
        <div class="text-center">
          <h1 class="font-display text-6xl md:text-8xl text-white mb-6">
            NOSSOS <span class="text-primary">FUNDADORES</span>
          </h1>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça quem está por trás da Kong Fit Rio
          </p>
        </div>
      </div>
    </section>

    <!-- Founders Section -->
    <section class="pb-24">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <!-- Founders Image -->
          <div class="relative rounded-2xl overflow-hidden" style="max-height: 600px;">
            <img
              src="/fundadores.webp"
              alt="Eduardo e Monik - Fundadores da Kong Fit Rio"
              class="w-full h-full rounded-2xl"
              style="object-fit: cover; object-position: top;"
            />
          </div>

          <!-- Founders Info -->
          <div class="flex flex-col gap-6">
            <Card class="bg-card border-border/50 flex-1">
              <CardHeader>
                <CardTitle class="font-display text-3xl text-white">EDUARDO</CardTitle>
                <CardDescription class="text-primary">Co-Fundador</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground">
                  Apaixonado por esportes e transformação de vidas, Eduardo traz sua experiência e dedicação para criar um ambiente onde cada aluno pode alcançar seu máximo potencial. Sua visão é fazer da Kong Fit um espaço de superação e conquistas.
                </p>
              </CardContent>
            </Card>

            <Card class="bg-card border-border/50 flex-1">
              <CardHeader>
                <CardTitle class="font-display text-3xl text-white">MONIK</CardTitle>
                <CardDescription class="text-primary">Co-Fundadora</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground">
                  Com um olhar atento ao bem-estar e ao equilíbrio emocional dos alunos, Monik é a força por trás da filosofia humanizada da Kong Fit. Acredita que a transformação física deve caminhar junto com o desenvolvimento pessoal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Nossa História -->
    <section class="py-24 bg-card">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="font-display text-6xl text-white mb-6">
            NOSSA <span class="text-primary">HISTÓRIA</span>
          </h2>
          <p class="text-lg md:text-xl text-muted-foreground md:text-justify">
            Há mais de 10 anos, Eduardo e Monik decidiram transformar um sonho em realidade. Com a paixão por ajudar pessoas a alcançarem seus objetivos, fundaram a Kong Fit Rio com uma proposta diferente: ser mais do que uma academia, ser uma escola de vida. Hoje, a Kong Fit é referência no Rio de Janeiro, unindo CrossTraining, musculação, e artes circenses em um único espaço dedicado à transformação completa dos seus alunos.
          </p>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="py-24">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="font-display text-6xl text-white mb-4">
            NOSSOS <span class="text-primary">VALORES</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="text-center">
            <div class="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Heart class="h-10 w-10 text-primary" />
            </div>
            <h3 class="font-display text-2xl text-white mb-4">PAIXÃO</h3>
            <p class="text-muted-foreground">
              Amamos o que fazemos e isso se reflete em cada aula, cada treino e cada conquista dos nossos alunos.
            </p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Target class="h-10 w-10 text-primary" />
            </div>
            <h3 class="font-display text-2xl text-white mb-4">COMPROMISSO</h3>
            <p class="text-muted-foreground">
              Estamos comprometidos com a evolução de cada aluno, respeitando seus limites e incentivando sua superação.
            </p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Users class="h-10 w-10 text-primary" />
            </div>
            <h3 class="font-display text-2xl text-white mb-4">COMUNIDADE</h3>
            <p class="text-muted-foreground">
              Mais do que alunos, construímos uma família. Aqui todos se apoiam e crescem juntos.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-card relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div class="container relative z-10 text-center">
        <h2 class="font-display text-6xl md:text-7xl text-white mb-6">
          FAÇA PARTE DA <span class="text-primary">FAMÍLIA</span>
        </h2>
        <p class="text-muted-foreground text-lg mb-10">
          Venha conhecer nossa estrutura e nosso time.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="uppercase tracking-wider font-semibold px-10 py-6" as-child>
            <a href="https://api.whatsapp.com/send/?phone=5521995224309" target="_blank" rel="noopener noreferrer">
              <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar Visita
            </a>
          </Button>
          <Button size="lg" variant="outline" class="uppercase tracking-wider font-semibold px-10 py-6 border-white/20 text-white hover:bg-white/10" as-child>
            <NuxtLink to="/planos">
              Ver Planos
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

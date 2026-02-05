<script setup lang="ts">
import {
  Dumbbell,
  Flame,
  CircleDot,
  HeartPulse,
  ArrowRight
} from 'lucide-vue-next'

const modalidades = [
  {
    slug: 'academia',
    title: 'ACADEMIA',
    icon: Dumbbell,
    description: 'Musculação com equipamentos de ponta.'
  },
  {
    slug: 'crosstraining',
    title: 'CROSSTRAINING',
    icon: Flame,
    description: 'Treino funcional de alta intensidade.'
  },
  {
    slug: 'endurox',
    title: 'ENDUROX',
    icon: HeartPulse,
    description: 'Treinamento estilo Hyrox para resistência.'
  },
  {
    slug: 'circus',
    title: 'CIRCUS',
    icon: CircleDot,
    description: 'Ginástica Solo, Tecido Acrobático e Lira Circense.'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div class="container relative z-10">
        <div class="max-w-3xl">
          <h1 class="font-display text-5xl md:text-7xl text-white mb-6">
            NOSSAS
            <span class="text-primary">MODALIDADES</span>
          </h1>
          <p class="text-xl text-muted-foreground">
            Treino completo pra você evoluir de verdade. Escolhe a tua e bora.
          </p>
        </div>
      </div>
    </section>

    <!-- Modalidades Grid -->
    <section class="pb-24">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink
            v-for="modalidade in modalidades"
            :key="modalidade.slug"
            :to="`/modalidades/${modalidade.slug}`"
            class="group"
          >
            <Card class="h-full bg-card border-border/50 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div class="w-16 h-16 rounded-full border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <component :is="modalidade.icon" class="h-8 w-8 text-zinc-400 group-hover:text-primary transition-colors" />
                </div>
                <CardTitle class="font-display text-2xl tracking-wide text-white group-hover:text-primary transition-colors">
                  {{ modalidade.title }}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground mb-4">{{ modalidade.description }}</p>
                <span class="inline-flex items-center gap-2 text-primary text-sm font-medium">
                  Saiba mais
                  <ArrowRight class="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </CardContent>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-card">
      <div class="container text-center">
        <h2 class="font-display text-4xl md:text-5xl text-white mb-6">
          BORA <span class="text-primary">TREINAR?</span>
        </h2>
        <p class="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Primeira aula experimental grátis. Vem sentir a energia da Kong Fit.
        </p>
        <Button size="lg" class="uppercase tracking-wider font-semibold px-10 py-6" as-child>
          <NuxtLink to="/planos">Ver Planos</NuxtLink>
        </Button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  Dumbbell,
  Flame,
  CircleDot,
  HeartPulse,
  ArrowLeft,
  Clock,
  Users,
  Zap,
  TrendingUp,
  Instagram,
  ImageIcon,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-vue-next'
import { ref } from 'vue'

const route = useRoute()
const slug = route.params.slug as string

const modalidadesData: Record<string, {
  title: string
  subtitle: string
  description: string
  icon: any
  benefits: string[]
  schedule: string
  intensity: string
  forWho: string
  stats: { value: string; label: string }[]
}> = {
  'academia': {
    title: 'ACADEMIA',
    subtitle: 'Musculação de verdade',
    description: 'Área completa de musculação com equipamentos de última geração. Seja para hipertrofia, definição ou força, aqui você encontra tudo que precisa para evoluir. Profissionais sempre disponíveis para orientação.',
    icon: Dumbbell,
    benefits: [
      'Equipamentos top',
      'Climatizado',
      'Orientação',
      'Área livre',
      'Máquinas',
      'Personalizado'
    ],
    schedule: 'Seg a Sex 6h-23h | Sáb 8h-18h',
    intensity: 'Você escolhe',
    forWho: 'Todos os níveis',
    stats: [
      { value: '500m²', label: 'De área' },
      { value: '50+', label: 'Equipamentos' },
      { value: '17h', label: 'Abertos/dia' }
    ]
  },
  'crosstraining': {
    title: 'CROSSTRAINING',
    subtitle: 'Treino funcional intenso',
    description: 'Metodologia de treino funcional de alta intensidade que combina movimentos de ginástica, levantamento de peso e cardio. Aulas em grupo com coaches certificados que vão te empurrar além dos seus limites.',
    icon: Flame,
    benefits: [
      'Queima intensa',
      'Condicionamento',
      'Comunidade',
      'Evolução',
      'Variado',
      'Coaches top'
    ],
    schedule: 'Aulas em diversos horários',
    intensity: 'Alta',
    forWho: 'Todos os níveis (treinos escaláveis)',
    stats: [
      { value: '800+', label: 'Calorias/aula' },
      { value: '60min', label: 'Por WOD' },
      { value: '100%', label: 'Intensidade' }
    ]
  },
  'endurox': {
    title: 'ENDUROX',
    subtitle: 'Resistência estilo Hyrox',
    description: 'Treinamento de resistência inspirado no formato Hyrox, combinando corrida com exercícios funcionais. Prepare-se para competições ou simplesmente eleve seu condicionamento a outro nível.',
    icon: HeartPulse,
    benefits: [
      'Resistência',
      'Condicionamento',
      'Força funcional',
      'Preparação competição',
      'Queima intensa',
      'Superação'
    ],
    schedule: 'Consulte horários disponíveis',
    intensity: 'Alta',
    forWho: 'Intermediário a avançado',
    stats: [
      { value: '8km', label: 'Corrida total' },
      { value: '8', label: 'Estações' },
      { value: '100%', label: 'Intensidade' }
    ]
  },
  'circus': {
    title: 'CIRCUS',
    subtitle: 'Arte e força combinadas',
    description: 'Modalidade que une força, flexibilidade e técnicas circenses. Oferecemos aulas de Ginástica Solo, Tecido Acrobático e Lira Circense. Treino diferente que desafia corpo e mente.',
    icon: CircleDot,
    benefits: [
      'Ginástica Solo',
      'Tecido Acrobático',
      'Lira Circense',
      'Flexibilidade',
      'Força funcional',
      'Consciência corporal'
    ],
    schedule: 'Consulte horários disponíveis',
    intensity: 'Moderada a Alta',
    forWho: 'Iniciantes a avançados',
    stats: [
      { value: '6m', label: 'Altura tecido' },
      { value: '360°', label: 'Movimentos' },
      { value: '∞', label: 'Possibilidades' }
    ]
  }
}

const modalidade = computed(() => modalidadesData[slug])

// Lightbox state
const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % 6
}

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + 6) % 6
}

// Redireciona se a modalidade não existir
if (!modalidadesData[slug]) {
  navigateTo('/')
}
</script>

<template>
  <div v-if="modalidade">
    <!-- Hero -->
    <section class="pt-32 pb-16 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
      <div class="container relative z-10">
        <!-- Back button -->
        <NuxtLink
          to="/modalidades"
          class="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para modalidades</span>
        </NuxtLink>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center">
                <component :is="modalidade.icon" class="h-8 w-8 text-primary" />
              </div>
              <p class="text-xl text-primary font-display tracking-wide">
                {{ modalidade.subtitle }}
              </p>
            </div>
            <h1 class="font-display text-6xl md:text-8xl text-white mb-6">
              {{ modalidade.title }}
            </h1>
            <p class="text-lg text-muted-foreground leading-relaxed mb-8">
              {{ modalidade.description }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <Button size="lg" class="uppercase tracking-wider font-semibold px-8 py-6" as-child>
                <NuxtLink to="/planos">Quero Começar</NuxtLink>
              </Button>
              <Button size="lg" variant="outline" class="uppercase tracking-wider font-semibold px-8 py-6 border-white/20 text-white hover:bg-white/10" as-child>
                <a href="https://api.whatsapp.com/send/?phone=5521995224309" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              v-for="stat in modalidade.stats"
              :key="stat.label"
              class="bg-card border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <p class="font-display text-4xl md:text-5xl text-primary mb-2">{{ stat.value }}</p>
              <p class="text-muted-foreground text-sm uppercase tracking-wider">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Info Cards -->
    <section class="py-16">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Clock class="h-7 w-7 text-primary" />
            </div>
            <h3 class="font-display text-xl text-white mb-2">HORÁRIOS</h3>
            <p class="text-muted-foreground">{{ modalidade.schedule }}</p>
          </div>

          <div class="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <TrendingUp class="h-7 w-7 text-primary" />
            </div>
            <h3 class="font-display text-xl text-white mb-2">INTENSIDADE</h3>
            <p class="text-muted-foreground">{{ modalidade.intensity }}</p>
          </div>

          <div class="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-colors">
            <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Users class="h-7 w-7 text-primary" />
            </div>
            <h3 class="font-display text-xl text-white mb-2">PARA QUEM?</h3>
            <p class="text-muted-foreground">{{ modalidade.forWho }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-20 bg-card">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="font-display text-5xl md:text-6xl text-white mb-4">
            POR QUE <span class="text-primary">ESCOLHER?</span>
          </h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div
            v-for="benefit in modalidade.benefits"
            :key="benefit"
            class="flex flex-col items-center gap-4"
          >
            <div class="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center hover:border-primary/50 transition-colors">
              <Zap class="h-8 w-8 md:h-10 md:w-10 text-primary" />
            </div>
            <p class="font-display text-sm md:text-base tracking-wider text-white text-center">{{ benefit }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="py-24">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="font-display text-5xl md:text-6xl text-white mb-4">
            VEJA O <span class="text-primary">AMBIENTE</span>
          </h2>
          <p class="text-muted-foreground text-lg">
            Conheça nossa estrutura e sinta a energia do treino.
          </p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <button
            v-for="i in 6"
            :key="i"
            @click="openLightbox(i - 1)"
            class="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
          >
            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
            <ImageIcon class="h-12 w-12 text-white/20 mb-3" />
            <span class="font-display text-lg text-white/30">FOTO {{ i }}</span>
            <p class="text-white/20 text-sm mt-1">{{ modalidade.title }}</p>
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxOpen"
        class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
        @click.self="closeLightbox"
      >
        <!-- Close button -->
        <button
          @click="closeLightbox"
          class="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <X class="h-6 w-6" />
        </button>

        <!-- Previous button -->
        <button
          @click="prevImage"
          class="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft class="h-6 w-6" />
        </button>

        <!-- Image placeholder -->
        <div class="w-full max-w-4xl mx-4 aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex flex-col items-center justify-center border border-border/50">
          <ImageIcon class="h-20 w-20 text-white/20 mb-4" />
          <span class="font-display text-2xl text-white/30">FOTO {{ currentImageIndex + 1 }}</span>
          <p class="text-white/20 mt-2">{{ modalidade.title }}</p>
        </div>

        <!-- Next button -->
        <button
          @click="nextImage"
          class="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight class="h-6 w-6" />
        </button>

        <!-- Image counter -->
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-display">
          {{ currentImageIndex + 1 }} / 6
        </div>
      </div>
    </Teleport>

    <!-- CTA -->
    <section class="py-24 bg-card relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div class="container relative z-10 text-center">
        <h2 class="font-display text-5xl md:text-6xl text-white mb-6">
          BORA <span class="text-primary">TREINAR?</span>
        </h2>
        <p class="text-muted-foreground text-lg mb-10">
          Primeira aula experimental grátis. Vem sentir a energia da Kong Fit.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" class="uppercase tracking-wider font-semibold px-10 py-6" as-child>
            <NuxtLink to="/planos">Ver Planos</NuxtLink>
          </Button>
          <Button size="lg" variant="outline" class="uppercase tracking-wider font-semibold px-10 py-6 border-white/20 text-white hover:bg-white/10" as-child>
            <a href="https://www.instagram.com/kongfitrio/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
              <Instagram class="h-5 w-5" />
              Seguir no Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

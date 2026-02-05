<script setup lang="ts">
import {
  Dumbbell,
  ArrowRight,
  StretchHorizontal,
  Flame,
  CircleDot,
  Box,
  HeartPulse,
  Star
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
    slug: 'open-box',
    title: 'OPEN BOX',
    icon: Box,
    description: 'Acesso livre para treinar no seu ritmo.'
  },
  {
    slug: 'cardio',
    title: 'CARDIO',
    icon: HeartPulse,
    description: 'Área completa de equipamentos cardio.'
  },
  {
    slug: 'circus',
    title: 'CIRCUS',
    icon: CircleDot,
    description: 'Acrobacias e técnicas circenses.'
  },
  {
    slug: 'alongamento',
    title: 'ALONGAMENTO',
    icon: StretchHorizontal,
    description: 'Flexibilidade e mobilidade para potencializar seus treinos.'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Video Background -->
      <div class="absolute inset-0 z-0">
        <video
          autoplay
          muted
          loop
          playsinline
          class="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/70" />
        <!-- Gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <!-- Content -->
      <div class="container relative z-10 pt-20">
        <div class="max-w-4xl">
          <!-- Main Headline -->
          <h1 class="font-display text-6xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none mb-6">
            SUA
            <span class="text-primary">MELHOR VERSÃO</span>
            <br />
            COMEÇA AQUI
          </h1>

          <!-- Subheadline -->
          <p class="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed">
            CrossTraining, musculação e treino funcional no Rio de Janeiro.
            <span class="text-white font-semibold">Primeira aula grátis. Vem conhecer.</span>
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4">
            <Button size="lg" class="text-base px-8 py-6 uppercase tracking-wider font-semibold group" as-child>
              <a href="https://api.whatsapp.com/send/?phone=5521995224309" target="_blank" rel="noopener noreferrer">
                <svg class="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Começar Agora
              </a>
            </Button>
            <Button size="lg" variant="outline" class="text-base px-8 py-6 uppercase tracking-wider font-semibold border-white/20 text-white hover:bg-white/10 group" as-child>
              <NuxtLink to="/planos">
                Ver Planos
                <ArrowRight class="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </NuxtLink>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Modalidades Section -->
    <section class="py-24 bg-background">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="font-display text-6xl text-white mb-6">
            NOSSAS <span class="text-primary">MODALIDADES</span>
          </h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            Treino completo pra você evoluir de verdade. Escolhe a tua e bora.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-8 md:gap-12">
          <NuxtLink
            v-for="modalidade in modalidades"
            :key="modalidade.slug"
            :to="`/modalidades/${modalidade.slug}`"
            class="group flex flex-col items-center gap-4"
          >
            <!-- Circle Icon -->
            <div class="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10 group-hover:scale-110">
              <component :is="modalidade.icon" class="h-10 w-10 md:h-12 md:w-12 text-zinc-400 group-hover:text-primary transition-colors" />
            </div>
            <!-- Title -->
            <span class="font-display text-sm md:text-base tracking-wider text-zinc-400 group-hover:text-white transition-colors">
              {{ modalidade.title }}
            </span>
          </NuxtLink>
        </div>

        <!-- WhatsApp CTA -->
        <div class="mt-16 text-center">
          <Button size="lg" class="text-base px-8 py-6 uppercase tracking-wider font-semibold group" as-child>
            <a href="https://api.whatsapp.com/send/?phone=5521995224309" target="_blank" rel="noopener noreferrer">
              <svg class="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agende sua Visita
            </a>
          </Button>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-primary">
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="font-display text-5xl md:text-6xl text-black">10+</div>
            <div class="text-black/70 uppercase tracking-wide text-sm mt-2">Anos Transformando Vidas</div>
          </div>
          <div>
            <div class="font-display text-5xl md:text-6xl text-black">18h</div>
            <div class="text-black/70 uppercase tracking-wide text-sm mt-2">Funcionamento por Dia</div>
          </div>
          <div>
            <div class="font-display text-5xl md:text-6xl text-black">45+</div>
            <div class="text-black/70 uppercase tracking-wide text-sm mt-2">Professores</div>
          </div>
          <div>
            <div class="font-display text-5xl md:text-6xl text-black">7</div>
            <div class="text-black/70 uppercase tracking-wide text-sm mt-2">Dias por Semana</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About/Philosophy Section -->
    <section class="py-24 bg-card">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center mb-12">
          <h2 class="font-display text-6xl text-white mb-6">
            SOMOS MAIS DO QUE UMA
            <span class="text-primary">ACADEMIA</span>
          </h2>
          <p class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:text-justify">
            Somos uma Escola, e há mais de 10 anos ajudamos nossos alunos a realizarem seus sonhos. Além de buscar a transformação do corpo e torná-lo cada vez mais forte fisicamente, trabalhamos o equilíbrio emocional de nossos alunos para que ambos caminhem alinhados proporcionando uma evolução exponencial em seus estilos de vida. Cada aula é uma experiência única em um ambiente que respira motivação e superação. Seja no Crosstraining, na Academia ou no Circus, aqui você encontra tudo o que precisa para alcançar seus objetivos.
          </p>
        </div>

        <!-- YouTube Video -->
        <div class="max-w-4xl mx-auto mb-12">
          <div class="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <iframe
              class="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Kong Fit Rio - Vídeo Institucional"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>

        <!-- WhatsApp CTA -->
        <div class="text-center">
          <Button size="lg" class="text-base px-8 py-6 uppercase tracking-wider font-semibold" as-child>
            <a href="https://api.whatsapp.com/send/?phone=5521995224309" target="_blank" rel="noopener noreferrer">
              <svg class="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale Conosco
            </a>
          </Button>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-24 bg-black">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="font-display text-6xl text-white mb-4">
            O QUE DIZEM <span class="text-primary">SOBRE NÓS</span>
          </h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            Avaliações reais de quem treina na Kong Fit
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Testimonial 1 -->
          <Card class="bg-zinc-900 border-zinc-800">
            <CardContent class="pt-6">
              <div class="flex items-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="h-4 w-4 fill-primary text-primary" />
              </div>
              <p class="text-white/80 mb-6">
                "Lugar incrível com escola de circo, área de open box, Crossfit e uma musculação enorme.."
              </p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span class="text-primary font-semibold">MF</span>
                </div>
                <div>
                  <p class="text-white font-medium">Monik Ferreira</p>
                  <p class="text-muted-foreground text-sm">Google Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Testimonial 2 -->
          <Card class="bg-zinc-900 border-zinc-800">
            <CardContent class="pt-6">
              <div class="flex items-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="h-4 w-4 fill-primary text-primary" />
              </div>
              <p class="text-white/80 mb-6">
                "Academia muito boa, ótimos equipamentos, equipe muito simpática e atenciosa. Super indico!"
              </p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span class="text-primary font-semibold">LF</span>
                </div>
                <div>
                  <p class="text-white font-medium">Luiz Fernandes</p>
                  <p class="text-muted-foreground text-sm">Google Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Testimonial 3 -->
          <Card class="bg-zinc-900 border-zinc-800">
            <CardContent class="pt-6">
              <div class="flex items-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="h-4 w-4 fill-primary text-primary" />
              </div>
              <p class="text-white/80 mb-6">
                "Minha filha ama as aulas de circo! Professores muito bons e aulas animadas. Apresentações lindas!"
              </p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span class="text-primary font-semibold">PB</span>
                </div>
                <div>
                  <p class="text-white font-medium">Priscila Barros</p>
                  <p class="text-muted-foreground text-sm">Google Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Testimonial 4 -->
          <Card class="bg-zinc-900 border-zinc-800">
            <CardContent class="pt-6">
              <div class="flex items-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="h-4 w-4 fill-primary text-primary" />
              </div>
              <p class="text-white/80 mb-6">
                "Professores super competentes e sempre atenciosos. O espaço é grande, arejado, com equipamentos para todos. Adoro e recomendo!"
              </p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span class="text-primary font-semibold">FM</span>
                </div>
                <div>
                  <p class="text-white font-medium">Fernanda Miranda</p>
                  <p class="text-muted-foreground text-sm">Google Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Testimonial 5 -->
          <Card class="bg-zinc-900 border-zinc-800">
            <CardContent class="pt-6">
              <div class="flex items-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="h-4 w-4 fill-primary text-primary" />
              </div>
              <p class="text-white/80 mb-6">
                "Sem dúvidas o melhor box de crossfit da região! Profissionais íntegros e competentes! Recomendamos de olhos fechados!!!"
              </p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span class="text-primary font-semibold">YS</span>
                </div>
                <div>
                  <p class="text-white font-medium">Yasmin Silva</p>
                  <p class="text-muted-foreground text-sm">Google Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <!-- Testimonial 6 -->
          <Card class="bg-zinc-900 border-zinc-800">
            <CardContent class="pt-6">
              <div class="flex items-center gap-1 mb-4">
                <Star v-for="i in 5" :key="i" class="h-4 w-4 fill-primary text-primary" />
              </div>
              <p class="text-white/80 mb-6">
                "Ambiente muito agradável, profissionais qualificados e incentivadores. Tenho aprimorado meus movimentos a cada dia. Super indico!!"
              </p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span class="text-primary font-semibold">PC</span>
                </div>
                <div>
                  <p class="text-white font-medium">Pryscilla Casagrande</p>
                  <p class="text-muted-foreground text-sm">Google Reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Google Reviews Button -->
        <div class="text-center mt-12">
          <Button size="lg" variant="outline" class="text-base px-8 py-6 uppercase tracking-wider font-semibold border-white/20 text-white hover:bg-white/10" as-child>
            <a href="https://share.google/668bQnBtFYxNUyXYU" target="_blank" rel="noopener noreferrer">
              <svg class="mr-2 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Veja Mais no Google
            </a>
          </Button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 md:py-24 relative overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="/cta.webp"
          alt=""
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/80" />
      </div>

      <div class="container relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="font-display text-6xl text-white mb-6">
            SUA HORA
            <span class="text-primary">É AGORA</span>
          </h2>
          <p class="text-xl text-white/70 mb-10">
            Primeira aula grátis. Vem conhecer o espaço e começar sua transformação.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" class="text-base px-10 py-6 uppercase tracking-wider font-semibold" as-child>
              <NuxtLink to="/planos">Ver Planos</NuxtLink>
            </Button>
            <Button size="lg" variant="outline" class="text-base px-10 py-6 uppercase tracking-wider font-semibold border-white/20 text-white hover:bg-white/10" as-child>
              <NuxtLink to="/loja">Conferir Loja</NuxtLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

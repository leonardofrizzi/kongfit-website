<script setup lang="ts">
import { Check, ChevronDown, ArrowRight } from 'lucide-vue-next'
import { ref } from 'vue'

const planos = [
  {
    name: 'PLANO A',
    description: 'Lorem ipsum dolor',
    price: 'R$ XX',
    period: '/mês',
    features: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor',
      'Incididunt ut labore',
      'Et dolore magna aliqua'
    ],
    popular: false
  },
  {
    name: 'PLANO B',
    description: 'Lorem ipsum dolor',
    price: 'R$ XX',
    period: '/mês',
    features: [
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor',
      'Incididunt ut labore',
      'Et dolore magna aliqua',
      'Ut enim ad minim veniam',
      'Quis nostrud exercitation'
    ],
    popular: true
  },
  {
    name: 'PLANO C',
    description: 'Lorem ipsum dolor',
    price: 'R$ XX',
    period: '/mês',
    features: [
      'Tudo do Plano B',
      'Lorem ipsum dolor sit amet',
      'Consectetur adipiscing elit',
      'Sed do eiusmod tempor',
      'Incididunt ut labore',
      'Et dolore magna aliqua',
      'Ut enim ad minim veniam'
    ],
    popular: false
  }
]

const faqs = [
  {
    question: 'Tem fidelidade?',
    answer: 'Não. Cancele quando quiser, sem multas ou burocracia.'
  },
  {
    question: 'Como funciona a aula experimental?',
    answer: 'A primeira aula é grátis. Só chegar, treinar e sentir o ambiente.'
  },
  {
    question: 'Posso trocar de plano?',
    answer: 'Pode. Upgrade ou downgrade a qualquer momento com ajuste proporcional.'
  },
  {
    question: 'Iniciantes podem fazer CrossTraining?',
    answer: 'Sim. Os treinos são adaptados para todos os níveis.'
  },
  {
    question: 'Aceitam Wellhub ou TotalPass?',
    answer: 'Sim. Consulte disponibilidade de modalidades no app do seu benefício.'
  },
  {
    question: 'Qual o horário de funcionamento?',
    answer: 'Seg a sex 6h-00h, sáb 8h-18h, dom 8h-14h.'
  }
]

const openFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? null : index
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div class="container relative z-10">
        <div class="text-center">
          <h1 class="font-display text-6xl md:text-8xl text-white mb-6">
            NOSSOS <span class="text-primary">PLANOS</span>
          </h1>
          <p class="text-xl text-muted-foreground">
            Sem fidelidade. Sem burocracia. Só resultado.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pb-24">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            v-for="plano in planos"
            :key="plano.name"
            :class="[
              'relative flex flex-col border-2 transition-all duration-300',
              plano.popular
                ? 'border-primary bg-card md:scale-105 shadow-2xl shadow-primary/20'
                : 'border-border/50 bg-card hover:border-border'
            ]"
          >
            <div v-if="plano.popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge class="bg-primary text-black font-semibold uppercase tracking-wider px-4 py-1">
                Mais Popular
              </Badge>
            </div>

            <CardHeader class="text-center pt-8 pb-4">
              <CardTitle class="font-display text-3xl tracking-wide text-white">{{ plano.name }}</CardTitle>
              <CardDescription class="text-muted-foreground">{{ plano.description }}</CardDescription>
            </CardHeader>

            <CardContent class="flex-1 pt-4">
              <div class="text-center mb-8">
                <span class="font-display text-5xl text-white">{{ plano.price }}</span>
                <span class="text-muted-foreground text-lg">{{ plano.period }}</span>
              </div>

              <ul class="space-y-3">
                <li
                  v-for="feature in plano.features"
                  :key="feature"
                  class="flex items-center gap-3"
                >
                  <div class="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check class="h-3 w-3 text-primary" />
                  </div>
                  <span class="text-muted-foreground text-sm">{{ feature }}</span>
                </li>
              </ul>
            </CardContent>

            <CardFooter class="pt-6 pb-8">
              <Button
                :variant="plano.popular ? 'default' : 'outline'"
                :class="[
                  'w-full uppercase tracking-wider font-semibold py-6 group',
                  !plano.popular && 'border-border/50 hover:border-primary hover:text-primary hover:bg-transparent'
                ]"
                as-child
              >
                <a
                  href="https://api.whatsapp.com/send/?phone=5521995224309"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center"
                >
                  Começar Agora
                  <ArrowRight class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>

    <!-- Benefícios Corporativos -->
    <section class="py-20 bg-card">
      <div class="container">
        <div class="text-center mb-12">
          <h2 class="font-display text-6xl text-white mb-4">
            USA <span class="text-primary">BENEFÍCIO?</span>
          </h2>
          <p class="text-muted-foreground text-lg">
            Treine com seu benefício corporativo.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-background border border-border/50 rounded-xl p-8 flex flex-col items-center justify-center gap-4 min-h-[140px]">
            <img
              src="https://assets-cdn.wellhub.com/images/mep-cms/horizontal_complete_logo_magenta_3_e637a577de.png"
              alt="Wellhub"
              class="h-12 w-auto max-w-[180px] object-contain"
            />
            <p class="text-muted-foreground text-sm text-center">Antigo Gympass. Todas as modalidades disponíveis.</p>
          </div>
          <div class="bg-background border border-border/50 rounded-xl p-8 flex flex-col items-center justify-center gap-4 min-h-[140px]">
            <img
              src="https://www.ativagruposbf.com.br/explorer/uploads/upload_1744229992.JPG"
              alt="TotalPass"
              class="h-12 w-auto max-w-[180px] object-contain"
            />
            <p class="text-muted-foreground text-sm text-center">Acesso completo. Confira no app.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="font-display text-6xl text-white mb-4">
            PERGUNTAS <span class="text-primary">FREQUENTES</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border border-border/50 rounded-xl overflow-hidden h-fit"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-card/80 transition-colors"
            >
              <span class="font-semibold text-white">{{ faq.question }}</span>
              <ChevronDown
                :class="[
                  'h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0 ml-4',
                  openFaq === index && 'rotate-180'
                ]"
              />
            </button>
            <div
              v-show="openFaq === index"
              class="px-5 pb-5 bg-card"
            >
              <p class="text-muted-foreground">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-card relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div class="container relative z-10 text-center">
        <h2 class="font-display text-6xl md:text-7xl text-white mb-6">
          BORA <span class="text-primary">TREINAR?</span>
        </h2>
        <p class="text-muted-foreground text-lg mb-10">
          Primeira aula grátis. Vem conhecer a estrutura.
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
            <NuxtLink to="/#modalidades">
              Ver Modalidades
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>

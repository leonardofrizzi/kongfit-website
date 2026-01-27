<script setup lang="ts">
import { ExternalLink, ShoppingBag, MapPin, Truck, Shield, Tag, Clock, Instagram } from 'lucide-vue-next'

const produtos = [
  {
    id: 1,
    name: 'Camiseta Kong Classic',
    description: 'Algodão premium com logo estampado',
    price: 'R$ XX',
    link: '#'
  },
  {
    id: 2,
    name: 'Regata Kong Training',
    description: 'Dry-fit pra treinar pesado',
    price: 'R$ XX',
    link: '#'
  },
  {
    id: 3,
    name: 'Shorts Kong Performance',
    description: 'Leve e resistente pro WOD',
    price: 'R$ XX',
    link: '#'
  },
  {
    id: 4,
    name: 'Moletom Kong',
    description: 'Com capuz, estilo fora do box',
    price: 'R$ XX',
    link: '#'
  },
  {
    id: 5,
    name: 'Boné Kong',
    description: 'Ajustável com logo bordado',
    price: 'R$ XX',
    link: '#'
  },
  {
    id: 6,
    name: 'Squeeze Kong 1L',
    description: 'Térmico pra manter a hidratação',
    price: 'R$ XX',
    link: '#'
  }
]

const diferenciais = [
  { icon: ShoppingBag, title: 'QUALIDADE', desc: 'Alta performance' },
  { icon: MapPin, title: 'RETIRE NA ACADEMIA', desc: 'Sem esperar entrega' },
  { icon: Shield, title: 'GARANTIA', desc: 'Troca garantida' },
  { icon: Tag, title: 'PREÇO JUSTO', desc: 'Direto da Kong' },
  { icon: Clock, title: 'DISPONÍVEL', desc: 'Pronta entrega' },
  { icon: Truck, title: 'ENVIAMOS', desc: 'Se preferir' }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div class="container relative z-10">
        <div class="text-center">
          <h1 class="font-display text-6xl md:text-8xl text-white mb-6">
            VISTA A <span class="text-primary">KONG</span>
          </h1>
          <p class="text-xl text-muted-foreground">
            Treine com estilo. Retire na academia.
          </p>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="pb-24">
      <div class="container">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            v-for="produto in produtos"
            :key="produto.id"
            class="group overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-300"
          >
            <!-- Image Placeholder -->
            <div class="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center relative overflow-hidden">
              <span class="font-display text-6xl text-white/10 group-hover:scale-110 transition-transform duration-500">KONG</span>
              <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>

            <CardHeader class="pb-2">
              <CardTitle class="font-display text-xl tracking-wide text-white group-hover:text-primary transition-colors">
                {{ produto.name }}
              </CardTitle>
              <CardDescription class="text-muted-foreground">{{ produto.description }}</CardDescription>
            </CardHeader>

            <CardContent class="pb-4">
              <p class="font-display text-3xl text-primary">{{ produto.price }}</p>
            </CardContent>

            <CardFooter>
              <Button class="w-full uppercase tracking-wider font-semibold group/btn" as-child>
                <a :href="produto.link" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2">
                  Comprar
                  <ExternalLink class="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>

    <!-- Diferenciais -->
    <section class="py-20 bg-card">
      <div class="container">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div
            v-for="item in diferenciais"
            :key="item.title"
            class="flex flex-col items-center gap-4"
          >
            <div class="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-zinc-700 bg-zinc-900/50 flex items-center justify-center">
              <component :is="item.icon" class="h-8 w-8 md:h-10 md:w-10 text-primary" />
            </div>
            <div class="text-center">
              <h3 class="font-display text-sm md:text-base tracking-wider text-white">{{ item.title }}</h3>
              <p class="text-muted-foreground text-xs md:text-sm">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24">
      <div class="container text-center">
        <h2 class="font-display text-6xl text-white mb-6">
          QUER VER <span class="text-primary">MAIS?</span>
        </h2>
        <p class="text-muted-foreground text-lg mb-10">
          Segue a Kong no Instagram pra ver lançamentos e novidades.
        </p>
        <Button size="lg" class="uppercase tracking-wider font-semibold px-10 py-6" as-child>
          <a href="https://www.instagram.com/kongfitrio/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
            <Instagram class="h-5 w-5" />
            Seguir no Instagram
          </a>
        </Button>
      </div>
    </section>
  </div>
</template>

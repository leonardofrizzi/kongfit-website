<script setup lang="ts">
import {
  Menu,
  X,
  Instagram,
  MapPin,
  ChevronDown,
  Dumbbell,
  Flame,
  CircleDot,
  HeartPulse
} from 'lucide-vue-next'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isModalidadesOpen = ref(false)

const modalidades = [
  { name: 'Academia', href: '/modalidades/academia', icon: Dumbbell },
  { name: 'CrossTraining', href: '/modalidades/crosstraining', icon: Flame },
  { name: 'Endurox', href: '/modalidades/endurox', icon: HeartPulse },
  { name: 'Circus', href: '/modalidades/circus', icon: CircleDot },
]

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Planos', href: '/planos' },
  { name: 'Loja', href: '/loja' },
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header
      class="fixed top-0 z-50 w-full transition-all duration-300 border-b"
      :class="isScrolled ? 'bg-background/95 backdrop-blur-md border-border/40' : 'bg-transparent border-transparent'"
    >
      <div class="container flex h-20 items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/fitkongrio.webp"
            alt="Kong Fit Rio"
            class="h-10 w-auto"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink
            to="/"
            class="text-sm font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
          >
            Início
          </NuxtLink>

          <!-- Modalidades Dropdown -->
          <div class="relative group">
            <NuxtLink
              to="/modalidades"
              class="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
            >
              Modalidades
              <ChevronDown class="h-4 w-4 transition-transform group-hover:rotate-180" />
            </NuxtLink>
            <!-- Dropdown Content -->
            <div class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div class="w-56 bg-card border border-border rounded-md shadow-lg overflow-hidden">
                <NuxtLink
                  to="/modalidades"
                  class="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
                >
                  Ver Todas
                </NuxtLink>
                <div class="h-px bg-border mx-1" />
                <NuxtLink
                  v-for="item in modalidades"
                  :key="item.href"
                  :to="item.href"
                  class="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-white/10 transition-colors"
                >
                  <component :is="item.icon" class="h-4 w-4 text-primary" />
                  {{ item.name }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/planos"
            class="text-sm font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
          >
            Planos
          </NuxtLink>

          <NuxtLink
            to="/loja"
            class="text-sm font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
          >
            Loja
          </NuxtLink>

          <NuxtLink
            to="/fundadores"
            class="text-sm font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
          >
            Fundadores
          </NuxtLink>

          <!-- Social Icons -->
          <div class="flex items-center gap-3 ml-4 pl-4 border-l border-white/20">
            <a
              href="https://www.instagram.com/kongfitrio/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/80 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram class="h-5 w-5" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5521995224309"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/80 hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <!-- WhatsApp SVG Icon -->
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </nav>

        <!-- Mobile Menu Button -->
        <Button
          variant="ghost"
          size="icon"
          class="md:hidden text-white"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Menu v-if="!isMenuOpen" class="h-6 w-6" />
          <X v-else class="h-6 w-6" />
        </Button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden bg-background/95 backdrop-blur-md border-t border-border/40">
        <nav class="container py-6 flex flex-col gap-4">
          <NuxtLink
            to="/"
            class="text-lg font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
            @click="isMenuOpen = false"
          >
            Início
          </NuxtLink>

          <!-- Mobile Modalidades -->
          <div>
            <button
              class="flex items-center justify-between w-full text-lg font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
              @click="isModalidadesOpen = !isModalidadesOpen"
            >
              Modalidades
              <ChevronDown class="h-5 w-5 transition-transform" :class="isModalidadesOpen && 'rotate-180'" />
            </button>
            <div v-if="isModalidadesOpen" class="mt-3 ml-4 flex flex-col gap-3">
              <NuxtLink
                to="/modalidades"
                class="text-sm text-primary font-semibold"
                @click="isMenuOpen = false"
              >
                Ver Todas
              </NuxtLink>
              <NuxtLink
                v-for="item in modalidades"
                :key="item.href"
                :to="item.href"
                class="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
                @click="isMenuOpen = false"
              >
                <component :is="item.icon" class="h-4 w-4" />
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            to="/planos"
            class="text-lg font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
            @click="isMenuOpen = false"
          >
            Planos
          </NuxtLink>

          <NuxtLink
            to="/loja"
            class="text-lg font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
            @click="isMenuOpen = false"
          >
            Loja
          </NuxtLink>

          <NuxtLink
            to="/fundadores"
            class="text-lg font-medium text-white/80 transition-colors hover:text-primary uppercase tracking-wide"
            @click="isMenuOpen = false"
          >
            Fundadores
          </NuxtLink>

          <!-- Mobile Social -->
          <div class="flex items-center gap-4 pt-4 mt-2 border-t border-border/40">
            <a
              href="https://www.instagram.com/kongfitrio/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
              @click="isMenuOpen = false"
            >
              <Instagram class="h-5 w-5" />
              <span class="text-sm">Instagram</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=5521995224309"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-white/80 hover:text-primary transition-colors"
              @click="isMenuOpen = false"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span class="text-sm">WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Fixed WhatsApp Button -->
    <a
      href="https://api.whatsapp.com/send/?phone=5521995224309"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-black/30 hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <svg class="h-7 w-7 text-black" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>

    <!-- Footer -->
    <footer id="contato" class="border-t border-border bg-black">
      <!-- Map Section -->
      <div class="w-full h-[300px] md:h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.123456789!2d-43.4567890!3d-23.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ0LjQiUyA0M8KwMjcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class=""
        />
              </div>

      <div class="container py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Brand -->
          <div class="lg:col-span-1">
            <img
              src="/fitkongrio.webp"
              alt="Kong Fit Rio"
              class="h-12 w-auto mb-6"
            />
            <p class="text-muted-foreground mb-6">
              Sua melhor versão começa aqui. Centro de treinamento completo no Recreio dos Bandeirantes.
            </p>
            <!-- Social Icons -->
            <div class="flex items-center gap-4">
              <a
                href="https://www.instagram.com/kongfitrio/"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram class="h-5 w-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5521995224309"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all"
                aria-label="WhatsApp"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h3 class="font-display text-xl tracking-wide mb-6 text-white">NAVEGAÇÃO</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/" class="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/modalidades" class="text-muted-foreground hover:text-primary transition-colors">
                  Modalidades
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/planos" class="text-muted-foreground hover:text-primary transition-colors">
                  Planos
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/loja" class="text-muted-foreground hover:text-primary transition-colors">
                  Loja
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/fundadores" class="text-muted-foreground hover:text-primary transition-colors">
                  Fundadores
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Modalidades -->
          <div>
            <h3 class="font-display text-xl tracking-wide mb-6 text-white">MODALIDADES</h3>
            <ul class="space-y-3">
              <li v-for="item in modalidades.slice(0, 5)" :key="item.href">
                <NuxtLink
                  :to="item.href"
                  class="text-muted-foreground hover:text-primary transition-colors"
                >
                  {{ item.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="font-display text-xl tracking-wide mb-6 text-white">ONDE ESTAMOS</h3>
            <ul class="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Rua+Gelse+Pacielo+da+Mota,+31,+Recreio+dos+Bandeirantes,+Rio+de+Janeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin class="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Rua Gelse Pacielo da Mota, 31<br />
                    Recreio dos Bandeirantes<br />
                    Rio de Janeiro - RJ
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5521995224309"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  (21) 99522-4309
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kongfitrio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram class="h-5 w-5 flex-shrink-0" />
                  @kongfitrio
                </a>
              </li>
              <li>
                <a
                  href="mailto:recepcao@kongfitrio.com"
                  class="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  recepcao@kongfitrio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator class="my-10 bg-border/50" />

        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm text-muted-foreground">
            &copy; {{ new Date().getFullYear() }} Kong Fit Rio. Todos os direitos reservados.
          </p>
          <NuxtLink to="/politica-de-privacidade" class="text-sm text-muted-foreground hover:text-primary transition-colors">
            Política de Privacidade
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

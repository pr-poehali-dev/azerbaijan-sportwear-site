import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'ARARAT Whey Protein',
    subtitle: 'Премиум сывороточный протеин',
    price: '2 990 ₽',
    oldPrice: '3 990 ₽',
    image: 'https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/c5a119f5-fcb8-47ff-8075-bf12f0f1420d.jpg',
    label: '🔥 ХИТ',
    features: ['30г белка', 'Без сахара', 'Быстрое усвоение']
  },
  {
    id: 2,
    name: 'YEREVAN Mass Gainer',
    subtitle: 'Для набора массы',
    price: '3 490 ₽',
    oldPrice: '4 490 ₽',
    image: 'https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/054366ce-61f1-4d20-b0fd-126382e8636a.jpg',
    label: '💪 ТОП',
    features: ['50г белка', '250г углеводов', 'Витамины']
  },
  {
    id: 3,
    name: 'SEVAN Creatine',
    subtitle: 'Микронизированный креатин',
    price: '1 490 ₽',
    oldPrice: '1 990 ₽',
    image: 'https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/c5a119f5-fcb8-47ff-8075-bf12f0f1420d.jpg',
    label: '⚡ СИЛА',
    features: ['100% чистота', '+20% силы', 'Проверено']
  },
  {
    id: 4,
    name: 'HAYASTAN Pre-Workout',
    subtitle: 'Мощный предтреник',
    price: '2 290 ₽',
    oldPrice: '2 990 ₽',
    image: 'https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/054366ce-61f1-4d20-b0fd-126382e8636a.jpg',
    label: '🚀 ЭНЕРГИЯ',
    features: ['300мг кофеина', 'Фокус', 'Пампинг']
  }
];

const reviews = [
  {
    id: 1,
    name: 'Арам Григорян',
    rating: 5,
    text: 'Джан, протеин просто огонь! За месяц +5 кг мышц набрал, вкус обалденный!',
    result: '+5 кг мышц',
    image: '💪'
  },
  {
    id: 2,
    name: 'Давид Саркисян',
    rating: 5,
    text: 'Предтреник - бомба! Энергии на всю тренировку хватает, рекомендую братьям!',
    result: '+30% энергии',
    image: '🔥'
  },
  {
    id: 3,
    name: 'Тигран Петросян',
    rating: 5,
    text: 'Лучшее спортпит! Качество топ, цены огонь, доставка быстрая. Беру постоянно!',
    result: 'Постоянный клиент',
    image: '⭐'
  }
];

export default function Index() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  return (
    <div className="min-h-screen">
      <div className="bg-accent text-accent-foreground py-2 text-center font-bold animate-pulse">
        🔥 АКЦИЯ! Скидка 25% на весь ассортимент до конца дня! 🔥
      </div>

      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl font-black text-white flex items-center justify-center text-xl">
                💪
              </div>
              <div>
                <h1 className="text-2xl font-black">ARARAT SPORT</h1>
                <p className="text-xs text-muted-foreground">Премиум спортпит джан</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#products" className="hover:text-primary transition-colors font-semibold">Товары</a>
              <a href="#why" className="hover:text-primary transition-colors font-semibold">Почему мы?</a>
              <a href="#reviews" className="hover:text-primary transition-colors font-semibold">Отзывы</a>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="font-bold">+7 (999) 123-45-67</span>
              </div>
            </div>
            <Button size="lg" className="bg-accent hover:bg-accent/90 font-bold text-lg px-6 shadow-lg">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              ЗАКАЗАТЬ
            </Button>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/acd969f2-07c7-43dc-882d-2f820b6afb59.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-accent text-white text-lg px-6 py-2 font-bold animate-pulse">
              🎁 ПОДАРОК ПРИ ПЕРВОМ ЗАКАЗЕ
            </Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              ПРОКАЧАЙ СЕБЯ <br />
              <span className="text-primary">ПО-АРМЯНСКИ</span> 💪
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-muted-foreground mb-4">
              Премиум спортпит от армянских братьев
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              🔥 100% качество • ⚡ Быстрый результат • 🎯 Проверенные бренды
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-xl font-black px-10 py-8 shadow-2xl hover:scale-105 transition-transform">
                ХОЧУ РЕЗУЛЬТАТ! 🚀
                <Icon name="ArrowRight" size={24} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-xl font-bold px-10 py-8 border-2 hover:bg-primary hover:text-white">
                Смотреть товары
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12">
              <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">3000+</div>
                <div className="text-sm font-semibold text-muted-foreground">Довольных качков</div>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">100%</div>
                <div className="text-sm font-semibold text-muted-foreground">Гарантия качества</div>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="text-3xl md:text-4xl font-black text-primary mb-2">24/7</div>
                <div className="text-sm font-semibold text-muted-foreground">Поддержка братьев</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-accent text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Icon name="Zap" size={24} />
              </div>
              <div>
                <div className="font-black text-xl">АКЦИЯ ЗАКАНЧИВАЕТСЯ</div>
                <div className="text-2xl font-black">
                  {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                </div>
              </div>
            </div>
            <div className="text-lg font-bold">
              🎁 + Шейкер в подарок при заказе от 3000₽
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-white text-lg px-6 py-2">🏆 ЛУЧШИЕ ТОВАРЫ</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              ВЫБЕРИ СВОЮ <span className="text-primary">МОЩЬ</span>
            </h2>
            <p className="text-xl text-muted-foreground font-semibold">
              Каждый продукт = твой шаг к результату
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 hover:border-primary relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Badge className="absolute top-4 left-4 bg-accent text-white font-black text-sm px-3 py-1 z-10 shadow-lg">
                  {product.label}
                </Badge>
                {product.oldPrice && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white font-black text-sm px-3 py-1 z-10">
                    -25%
                  </Badge>
                )}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-xl mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.subtitle}</p>
                  
                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="font-semibold">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    {product.oldPrice && (
                      <span className="text-lg text-muted-foreground line-through">{product.oldPrice}</span>
                    )}
                    <span className="text-3xl font-black text-primary">{product.price}</span>
                  </div>

                  <Button className="w-full bg-accent hover:bg-accent/90 font-black text-lg py-6 shadow-lg hover:scale-105 transition-transform">
                    КУПИТЬ СЕЙЧАС 🔥
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              ПОЧЕМУ <span className="text-primary">ARARAT SPORT</span>?
            </h2>
            <p className="text-xl font-semibold text-muted-foreground">Потому что мы знаем толк в качестве, джан!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-2xl transition-shadow border-2 hover:border-primary">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={40} className="text-primary" />
              </div>
              <h3 className="font-black text-2xl mb-3">100% КАЧЕСТВО</h3>
              <p className="text-muted-foreground font-semibold">
                Только сертифицированные товары от проверенных брендов. Подделок нет!
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-shadow border-2 hover:border-primary">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Rocket" size={40} className="text-secondary" />
              </div>
              <h3 className="font-black text-2xl mb-3">БЫСТРЫЙ РЕЗУЛЬТАТ</h3>
              <p className="text-muted-foreground font-semibold">
                Первые изменения через 2 недели! Проверено на братьях из зала.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-shadow border-2 hover:border-primary">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" size={40} className="text-accent" />
              </div>
              <h3 className="font-black text-2xl mb-3">ПО-БРАТСКИ</h3>
              <p className="text-muted-foreground font-semibold">
                Честные цены, подарки, бонусы. Работаем для своих, как семья!
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-accent via-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black mb-2">🎁 ПОЛУЧИ ШЕЙКЕР В ПОДАРОК!</h3>
              <p className="text-xl font-bold text-white/90">При первом заказе от 3000₽ — фирменный шейкер БЕСПЛАТНО!</p>
            </div>
            <Button size="lg" variant="secondary" className="font-black text-xl px-10 py-8 shadow-2xl hover:scale-105 transition-transform">
              ХОЧУ ПОДАРОК! 🎁
            </Button>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-white text-lg px-6 py-2">⭐ ОТЗЫВЫ</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              ЧТО ГОВОРЯТ <span className="text-primary">БРАТЬЯ</span>
            </h2>
            <p className="text-xl text-muted-foreground font-semibold">Реальные люди, реальные результаты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {reviews.map((review, index) => (
              <Card 
                key={review.id} 
                className="p-6 hover:shadow-2xl transition-shadow animate-fade-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <div className="text-4xl">{review.image}</div>
                </div>
                <Badge className="bg-primary/10 text-primary font-bold mb-4">{review.result}</Badge>
                <p className="text-muted-foreground font-semibold mb-4 text-lg">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-black text-primary">
                    {review.name[0]}
                  </div>
                  <span className="font-bold">{review.name}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-bold mb-6">🌟 Средний рейтинг: <span className="text-primary text-3xl">4.9/5</span> (500+ отзывов)</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-muted/50 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">ГАРАНТИИ И ДОСТАВКА</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <h3 className="font-black mb-2">Доставка</h3>
                <p className="text-sm text-muted-foreground font-semibold">1-2 дня по Москве, 3-5 по России</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShieldCheck" size={32} className="text-secondary" />
                </div>
                <h3 className="font-black mb-2">Гарантия</h3>
                <p className="text-sm text-muted-foreground font-semibold">100% возврат денег если не понравится</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" size={32} className="text-accent" />
                </div>
                <h3 className="font-black mb-2">Подарки</h3>
                <p className="text-sm text-muted-foreground font-semibold">Бонусы и подарки при каждом заказе</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" size={32} className="text-primary" />
                </div>
                <h3 className="font-black mb-2">Поддержка</h3>
                <p className="text-sm text-muted-foreground font-semibold">Отвечаем в течение 5 минут 24/7</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">💪</div>
          <div className="absolute bottom-10 right-10 text-9xl">🔥</div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              НАЧНИ ПРОКАЧКУ <br /> ПРЯМО СЕЙЧАС!
            </h2>
            <p className="text-2xl font-bold mb-8">
              🎁 Шейкер в подарок + скидка 25% = твой шанс сэкономить 1000₽!
            </p>
            <Button size="lg" variant="secondary" className="font-black text-2xl px-12 py-10 shadow-2xl hover:scale-105 transition-transform">
              ЗАКАЗАТЬ СО СКИДКОЙ 🚀
              <Icon name="ArrowRight" size={28} className="ml-3" />
            </Button>
            <p className="mt-6 text-sm font-bold text-white/80">⏰ Акция действует ещё 23:45:30</p>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl font-black text-white flex items-center justify-center">
                  💪
                </div>
                <span className="font-black text-xl">ARARAT SPORT</span>
              </div>
              <p className="text-background/70 text-sm font-semibold">
                Премиум спортпит для настоящих джентльменов спорта
              </p>
            </div>

            <div>
              <h4 className="font-black mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-background/70 font-semibold">
                <li><a href="#products" className="hover:text-background transition-colors">Товары</a></li>
                <li><a href="#why" className="hover:text-background transition-colors">Почему мы</a></li>
                <li><a href="#reviews" className="hover:text-background transition-colors">Отзывы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70 font-semibold">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ararat-sport.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Спортивная, 10
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-background/10 border-background/20 hover:bg-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-background/10 border-background/20 hover:bg-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-background/10 border-background/20 hover:bg-primary">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70 font-semibold">
            <p>© 2024 ARARAT SPORT. Качаем братьев с 2020 года. Все права защищены джан! 💪</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Спортивная куртка "Огуз"',
    price: '12 990 ₽',
    image: 'https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/e5b9ac2b-0e1f-4c38-8190-80a96a4b4760.jpg',
    category: 'Куртки'
  },
  {
    id: 2,
    name: 'Футболка "Карабах"',
    price: '3 990 ₽',
    image: 'https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/7831875d-85a3-4b24-8189-4f16a60539bf.jpg',
    category: 'Футболки'
  },
  {
    id: 3,
    name: 'Спортивные штаны "Туран"',
    price: '6 490 ₽',
    image: 'https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/7831875d-85a3-4b24-8189-4f16a60539bf.jpg',
    category: 'Штаны'
  },
  {
    id: 4,
    name: 'Худи "Бута"',
    price: '8 990 ₽',
    image: 'https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/e5b9ac2b-0e1f-4c38-8190-80a96a4b4760.jpg',
    category: 'Толстовки'
  }
];

const reviews = [
  {
    id: 1,
    name: 'Эльнур М.',
    rating: 5,
    text: 'Отличное качество! Орнаменты выглядят потрясающе, ткань дышащая.',
    date: '15 октября 2024'
  },
  {
    id: 2,
    name: 'Лейла А.',
    rating: 5,
    text: 'Купила куртку для спортзала - все в восторге! Очень стильно и удобно.',
    date: '8 октября 2024'
  },
  {
    id: 3,
    name: 'Рашад Г.',
    rating: 5,
    text: 'Ношу с гордостью! Наконец-то спортивная одежда с азербайджанскими мотивами.',
    date: '2 октября 2024'
  }
];

export default function Index() {
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary via-secondary to-[hsl(194,100%,44%)] rounded-lg" />
            <h1 className="text-2xl font-bold">QARABAĞ Sport</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="hover:text-primary transition-colors">О бренде</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button variant="outline" size="icon">
            <Icon name="ShoppingCart" size={20} />
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-[hsl(194,100%,44%)]/10 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/1a36b703-ecc5-42e9-9f2a-f81447264889.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Новая коллекция 2024</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Спортивная одежда с душой Азербайджана
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Современный дизайн встречается с традиционными орнаментами. 
              Высокое качество материалов для тренировок и повседневной жизни.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                О бренде
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Каталог товаров</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждое изделие создано с любовью к деталям и азербайджанской культуре
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-secondary">
                    {product.category}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline">
              Показать все товары
              <Icon name="ChevronDown" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-accent text-accent-foreground">Наша история</Badge>
              <h2 className="text-4xl font-bold mb-6">О бренде QARABAĞ Sport</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  QARABAĞ Sport — это больше, чем просто одежда. Это гордость за нашу культуру, 
                  выраженная в современном спортивном стиле.
                </p>
                <p>
                  Мы начали с простой идеи: создать спортивную одежду, которая отражает богатое 
                  культурное наследие Азербайджана. Каждый орнамент тщательно отобран из традиционных 
                  ковровых узоров и адаптирован для современного дизайна.
                </p>
                <p>
                  Используем только премиальные материалы — дышащие, влагоотводящие ткани, 
                  которые идеально подходят как для интенсивных тренировок, так и для повседневной носки.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Моделей одежды</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5★</div>
                  <div className="text-sm text-muted-foreground">Средний рейтинг</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-[hsl(194,100%,44%)]/20 rounded-2xl blur-xl" />
              <img 
                src="https://cdn.poehali.dev/projects/f22e7164-3af2-4e29-950b-eedac9dc0205/files/1a36b703-ecc5-42e9-9f2a-f81447264889.jpg"
                alt="Азербайджанские орнаменты"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Таблица размеров</h2>
            <p className="text-lg text-muted-foreground">Выберите свой идеальный размер</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2 mb-6 flex-wrap justify-center">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  onClick={() => setSelectedSize(size)}
                  className="min-w-[80px]"
                >
                  {size}
                </Button>
              ))}
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Размер</th>
                      <th className="px-6 py-4 text-left font-semibold">Грудь (см)</th>
                      <th className="px-6 py-4 text-left font-semibold">Талия (см)</th>
                      <th className="px-6 py-4 text-left font-semibold">Бёдра (см)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-6 py-4 font-semibold">XS</td>
                      <td className="px-6 py-4">86-89</td>
                      <td className="px-6 py-4">66-69</td>
                      <td className="px-6 py-4">92-95</td>
                    </tr>
                    <tr className="border-t bg-muted/30">
                      <td className="px-6 py-4 font-semibold">S</td>
                      <td className="px-6 py-4">90-93</td>
                      <td className="px-6 py-4">70-73</td>
                      <td className="px-6 py-4">96-99</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-6 py-4 font-semibold">M</td>
                      <td className="px-6 py-4">94-97</td>
                      <td className="px-6 py-4">74-77</td>
                      <td className="px-6 py-4">100-103</td>
                    </tr>
                    <tr className="border-t bg-muted/30">
                      <td className="px-6 py-4 font-semibold">L</td>
                      <td className="px-6 py-4">98-102</td>
                      <td className="px-6 py-4">78-82</td>
                      <td className="px-6 py-4">104-108</td>
                    </tr>
                    <tr className="border-t">
                      <td className="px-6 py-4 font-semibold">XL</td>
                      <td className="px-6 py-4">103-107</td>
                      <td className="px-6 py-4">83-87</td>
                      <td className="px-6 py-4">109-113</td>
                    </tr>
                    <tr className="border-t bg-muted/30">
                      <td className="px-6 py-4 font-semibold">XXL</td>
                      <td className="px-6 py-4">108-112</td>
                      <td className="px-6 py-4">88-92</td>
                      <td className="px-6 py-4">114-118</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы покупателей</h2>
            <p className="text-lg text-muted-foreground">Что говорят наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={review.id} 
                className="p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-primary via-secondary to-[hsl(194,100%,44%)] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Бесплатная доставка</h3>
              <p className="text-white/90">При заказе от 5000 ₽ по всей России</p>
            </div>
            <Button size="lg" variant="secondary">
              Оформить заказ
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Условия доставки</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">По России</h3>
                <p className="text-muted-foreground">3-7 рабочих дней</p>
                <p className="text-sm text-muted-foreground mt-2">СДЭК, Почта России</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Самовывоз</h3>
                <p className="text-muted-foreground">Бесплатно</p>
                <p className="text-sm text-muted-foreground mt-2">Москва, Санкт-Петербург</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShieldCheck" size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Гарантия</h3>
                <p className="text-muted-foreground">Возврат 14 дней</p>
                <p className="text-sm text-muted-foreground mt-2">Без вопросов</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary via-secondary to-[hsl(194,100%,44%)] rounded-lg" />
                <span className="font-bold text-lg">QARABAĞ Sport</span>
              </div>
              <p className="text-background/70 text-sm">
                Спортивная одежда с азербайджанскими традициями
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li><a href="#catalog" className="hover:text-background transition-colors">Каталог</a></li>
                <li><a href="#about" className="hover:text-background transition-colors">О бренде</a></li>
                <li><a href="#reviews" className="hover:text-background transition-colors">Отзывы</a></li>
                <li><a href="#delivery" className="hover:text-background transition-colors">Доставка</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@qarabagh-sport.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-background/10 border-background/20 hover:bg-background/20">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-background/10 border-background/20 hover:bg-background/20">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="bg-background/10 border-background/20 hover:bg-background/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
            <p>© 2024 QARABAĞ Sport. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

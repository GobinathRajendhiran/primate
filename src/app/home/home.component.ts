import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products = [
    { name: 'T-shirt', brand: 'Armor Ramsey', price: 40, image: 'assets/images/shopping.webp' },
    { name: 'Jeans', brand: 'Denim Co.', price: 60, image: 'assets/images/shopping.webp' },
    { name: 'Jacket', brand: 'Winter Wear', price: 120, image: 'assets/images/shopping.webp' },
    { name: 'Sweater', brand: 'Cozy Knit', price: 80, image: 'assets/images/shopping.webp' },
    { name: 'Shorts', brand: 'Summer Vibes', price: 30, image: 'assets/images/shopping.webp' },
    { name: 'Skirt', brand: 'Fashion Line', price: 50, image: 'assets/images/shopping.webp' },
    { name: 'Blouse', brand: 'Elegant Wear', price: 70, image: 'assets/images/shopping.webp' },
    { name: 'Dress', brand: 'Chic Couture', price: 100, image: 'assets/images/shopping.webp' },
    { name: 'Hoodie', brand: 'Urban Style', price: 90, image: 'assets/images/shopping.webp' },
    { name: 'Cap', brand: 'Head Gear', price: 20, image: 'assets/images/shopping.webp' },
    { name: 'Scarf', brand: 'Winter Essentials', price: 25, image: 'assets/images/shopping.webp' },
    { name: 'Gloves', brand: 'Hand Warmers', price: 15, image: 'assets/images/shopping.webp' },
    { name: 'Socks', brand: 'Foot Comfort', price: 10, image: 'assets/images/shopping.webp' },
    { name: 'Shoes', brand: 'Step Up', price: 150, image: 'assets/images/shopping.webp' },
    { name: 'Sandals', brand: 'Beach Walk', price: 40, image: 'assets/images/shopping.webp' },
    { name: 'Belt', brand: 'Waist Fit', price: 35, image: 'assets/images/shopping.webp' },
    { name: 'Tie', brand: 'Formal Wear', price: 25, image: 'assets/images/shopping.webp' },
    { name: 'Hat', brand: 'Sun Shield', price: 30, image: 'assets/images/shopping.webp' },
    { name: 'Coat', brand: 'Classic Tailor', price: 200, image: 'assets/images/shopping.webp' },
    { name: 'Pajamas', brand: 'Night Comfort', price: 50, image: 'assets/images/shopping.webp' }
  ];
}

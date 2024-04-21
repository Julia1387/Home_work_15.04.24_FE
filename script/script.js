// 1 уровень сложности: Напишите класс Circle, который принимает радиус в качестве параметра конструктора. Добавьте метод area, который возвращает площадь круга, и метод circumference, возвращающий длину окружности.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }

  circumference() {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(5);
console.log(`Площадь круга: ${circle.area()}`);
console.log(`Длина окружности: ${circle.circumference()}`);

// 2. Создайте класс Book, который принимает название книги, автора и количество страниц в качестве параметров конструктора. Добавьте метод info, который выводит информацию о книге в формате "Книга: [название], Автор: [автор], Страниц: [количество]".

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  info() {
    return `Книга: ${this.title}, Автор: ${this.author}, Колличество страниц: ${this.pages}`;
  }
}

const book = new Book("Война и мир", "Лев Толстой", 1225);
console.log(book.info());

// 3. Напишите класс BankAccount, который принимает имя владельца и начальный баланс. Добавьте методы deposit и withdraw для управления счетом.

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Внесли ${amount} Euro. Новый баланс клиента: ${this.balance} Euro`;
    } else {
      return "Недопустимая сумма вклада. Пожалуйста введите положительное значение.";
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Снято денег ${amount} Euro. Новый баланс: ${this.balance} Euro`;
    } else {
      return "Недопустимая сумма снятия. Проверьте свой баланс и введитекорректное значение.";
    }
  }
  getBalance() {
    return `Текущий баланс для ${this.owner}: ${this.balance} Euro`;
  }
}

const account = new BankAccount("Bob", 600);
console.log(account.getBalance());
console.log(account.deposit(300));
console.log(account.withdraw(200));
console.log(account.withdraw(1500));
console.log(account.getBalance());

//4.  Создайте класс Animal, который принимает имя и тип (например, "кот" или "собака") в качестве параметров конструктора. Добавьте метод sound, который выводит звук, производимый животным.

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  sound() {
    switch (this.type) {
      case "кот":
        return `${this.name} говорит 'Мяу'`;
      case "собака":
        return `${this.name} говорит 'Гав'`;
      default:
        return `${this.name} издает неизвестный звук`;
    }
  }
}

const cat = new Animal("Люся", "кошка");
console.log(cat.sound());

const dog = new Animal("Дик", "собака");
console.log(dog.sound());

// 5. Напишите класс Email, который принимает адрес электронной почты в качестве параметра конструктора. Добавьте методы send, receive, reply, чтобы моделировать основные функции электронной почты. Например, send - Отправка с адреса … получателю … произведена успешно, или можете поэксперементировать от себя

class Email {
  constructor(address) {
    this.address = address;
  }

  send(recipient) {
    return `Отправка с адреса ${this.address} на адрес ${recipient} произведена успешно.`;
  }

  receive(sender) {
    return `Получено письмо для ${this.address} от ${sender}.`;
  }

  reply(recipient) {
    return `Ответ на письмо с адреса ${this.address} отправлен на адрес ${recipient}.`;
  }
}

const myEmail = new Email("cat.mail@example.com");
console.log(myEmail.send("dog.friend@example.com"));
console.log(myEmail.receive("friends@example.com"));
console.log(myEmail.reply("baby.boss@example.com"));

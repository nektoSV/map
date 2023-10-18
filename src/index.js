export default class ErrorRepository {
    constructor() {
      this.errors = new Map();
  
      this.errors.set(1, 'Ошибка ввода');
      this.errors.set(2, 'Не корректная команда');
    }
  
    translate(code) {
      if(this.errors.has(code)) {
        return this.errors.get(code);
      } else {
        return 'Unknown error';
      }
    }
  }
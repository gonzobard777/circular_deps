
  export function greeting(lang?: 'ru' | 'en') {
    switch (lang) {
      case 'ru':
        return 'Привет';
      case 'en':
        return 'Hello';
      default:
        return '👋';
    }
  }



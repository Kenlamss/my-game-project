'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('QnAs', [{
        themeId: 1,
        question: 'Самой распространённой формой денег во все времена было ЭТО.',
        answer: 'Рогатый скот',
        price: 100,
      },
      {
        themeId: 1,
        question: 'Какая купюра является самой популярной во всём мире? Назовите валюту и стоимость купюры.',
        answer: '500 еврот',
        price: 200,
      },
      {
        themeId: 1,
        question: 'В 2004 году в Америке всерьёз рассматривался законопроект о разрешении ЭТОГО на долларовых банкнотах. К счастью, особой поддержки эта идея не получила.',
        answer: 'Реклама на долларовых банкнотах',
        price: 300,
      },
      {
        themeId: 1,
        question: 'Деньги изготавливаются в действительности не на обычной бумаге, а из ДВУХ особых материалов.',
        answer: 'Хлопка (75%) и Льна (25%)',
        price: 400,
      },
      {
        themeId: 1,
        question: 'Именно в Китае изготавливали самые практичные и надёжные деньги в мире. Это были не монеты из золота или серебра, а гораздо более функциональные вещи. Назовите хотя бы ДВА.',
        answer: 'Орудия труда, предметы интерьера, столовые приборы',
        price: 500,
      },
      {
        themeId: 2,
        question: 'Какая вода пригодна для питья?',
        answer: 'Пресная',
        price: 100,
      },
      {
        themeId: 2,
        question: 'Сколько процентов воды от своей массы тела должен потерять человек, чтобы у него начались галлюцинации?',
        answer: '10%',
        price: 200,
      },
      {
        themeId: 2,
        question: 'В этом городе продаётся самая дорогая вода в мире. Одна литровая бутылка обойдётся вам за 90 долларов.',
        answer: 'Лос-Анджелес',
        price: 300,
      },
      {
        themeId: 2,
        question: 'Согласно исследованиям, вода успешно поглощает инфракрасную ЕЁ.',
        answer: 'Радиацию',
        price: 400,
      },
      {
        themeId: 2,
        question: 'Несмотря на то, что Земля более чем на 70% покрыта водой, лишь столько процентов является пресной.',
        answer: '1%',
        price: 500,
      },
      {
        themeId: 3,
        question: 'Назовите самое популярное женское имя в мире женское имя. Его носят почти 100 миллионов женщин.',
        answer: 'Анна',
        price: 100,
      },
      {
        themeId: 3,
        question: 'В Швеции живёт больше 300.000 человек с этой фамилией. К сожалению или к счастью, живут эти люди не на верхушке домов.',
        answer: 'Карлсон',
        price: 200,
      },
      {
        themeId: 3,
        question: 'В Америке примерно 2,5 человек носят эту фамилию. Это самая популярная фамилия в США.',
        answer: 'Smith',
        price: 300,
      },
      {
        themeId: 3,
        question: 'В Пенсильвании в 1979 году было зарегистрировано два необычных имени для родившихся детей, связанных с напитками.',
        answer: 'Пепси и Кола,Pepsi & Cola',
        price: 400,
      },
      {
        themeId: 3,
        question: 'В телефонной книге Нью-Йорка было 22 фамилии до Второй мировой войны и ни одной - после. Назовите фамилию.',
        answer: 'Гитлер',
        price: 500,
      },
      {
        themeId: 4,
        question: '',
        answer: '',
        price: 100,
      },
      {
        themeId: 4,
        question: '',
        answer: '',
        price: 200,
      },
      {
        themeId: 4,
        question: '',
        answer: '',
        price: 300,
      },
      {
        themeId: 4,
        question: '',
        answer: '',
        price: 400,
      },
      {
        themeId: 4,
        question: '',
        answer: '',
        price: 500,
      },
      {
        themeId: 5,
        question: '',
        answer: '',
        price: 100,
      },
      {
        themeId: 5,
        question: '',
        answer: '',
        price: 200,
      },
      {
        themeId: 5,
        question: '',
        answer: '',
        price: 300,
      },
      {
        themeId: 5,
        question: '',
        answer: '',
        price: 400,
      },
      {
        themeId: 5,
        question: '',
        answer: '',
        price: 500,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('QnAs', null, {});
  }
};

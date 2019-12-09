import {PostCompany} from './post-company';
import Person from './person';

export const postItemsData = [
  new PostCompany(
    'C0001',
    'Company',
    'Nova Poshta',
    'Stolychne shose str, 103, Kyiv, Ukraine',
    '111-111-11',
    'Mr X.',
    'assets/nova.png',
    'Is a private Ukrainian postal and courier company that provides express delivery of documents, freight and parcels for individuals and businesses. In 2017, the company delivered over 145 million shipments, through the company\'s 2300 branches throughout the country.'
  ).createDepartment({
    id: 'CD0001-00',
    type: 'Departmant',
    name: 'Post Department in Khmelnytskyi',
    address: 'Svoboda str, 23, Khmelnytskyi, Ukraine',
    telephone: '111-111-11-11',
    screen:  'assets/department.jpg',
    description: 'Some description'
  }).createDepartment({
    id: 'CD0001-01',
    type: 'Departmant',
    name: 'Post Department in Lviv',
    address: 'Shevchenka str, 6, Lviv, Ukraine',
    telephone: '111-111-11-22',
    screen: 'assets/department.jpg',
    description: 'Some description'
  }),
  new PostCompany(
    'C0002',
    'Company',
    'Ukr Poshta',
    'Franka str, 32, Kyiv, Ukraine',
    '222-222-22',
    'Mr Y.',
    'assets/ukr.png',
    'Is a public company of Ukraine with 100% state ownership due to its strategic importance. In 1999–2015 it was a unitary enterprise of the government of Ukraine.'
  ).createDepartment({
    id: 'CD0002-00',
    type: 'Departmant',
    name: 'Ukr Post Department in Khmelnytskyi',
    address: 'Zarichna str, 11/2, Khmelnytskyi, Ukraine',
    telephone: '222-222-22-11',
    screen: 'assets/department.jpg',
    description: 'Some description'
  }).createDepartment({
    id: 'CD0002-01',
    type: 'Departmant',
    name: 'Ukr Post Department in Poltava',
    address: 'Peremogy str, 16, Poltava, Ukraine',
    telephone: '222-222-22-22',
    screen: 'assets/department.jpg',
    description: 'Some description'
  })
];
export  const clientItemsData = [
  new Person(
    'Ivan Ivanov',
    'HB0001',
    33,
    'individual',
    'Zavodska str, 4/1, Khmelnytskyi, Ukraine',
    '093-102-120-11-11',
    0.03,
    'assets/person1.jpg',
    'Person #1 description'
  ),
  new Person(
    'Petrov Sidiriv',
    'HB0002',
    43,
    'individual',
    'Trudova str, 14, Khmelnytskyi, Ukraine',
    '055-155-177-16-551',
    0.05,
    'assets/person2.jpg',
    'Person #2 description'
  ), new Person(
    'Sergiy Ivanovych',
    'HB0003',
    23,
    'individual',
    'Tovstogo str, 38/2, Khmelnytskyi, Ukraine',
    '045-178-157-11-50',
    0.055,
    'assets/person3.jpg',
    'Person #3 description'
  )
];

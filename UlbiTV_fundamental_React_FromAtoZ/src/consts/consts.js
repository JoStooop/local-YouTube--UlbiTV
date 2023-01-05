const data = [
  { id: 1, title: 'JS - lorem', body: 'Description' },
  { id: 2, title: 'JS ', body: 'Description 2' },
  { id: 3, title: 'lorem', body: 'Description 3' },
]

const optionsValue = {
  defaultValue: 'Сортировка',
  options: [
    {value: 'title', name: 'По названию'},
    {value: 'body', name: 'По описанию'},
  ]
}


export { data, optionsValue }

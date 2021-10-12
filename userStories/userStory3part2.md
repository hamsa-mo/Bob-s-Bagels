# User Story 3 part 2

As a member of the public,
So that I can prepare to pay
When I go to checkout I'd like to know the total sum of the bagels in my basket


**Objects**
- bagel
- basket
  
  

**Messages**

- addItem()
- name()
- price`(@Integer)`
- totalPrice `(@Integer)`
 
**Properties**

- name `@String`
- itemList`(@Array[@item])`
- price `@array[@String]`
- totalPrice `@array[@String]`
  
  
**Output**

- `@itemList`
- `@string`

  
<br><br>

| Objects | Properties                                                                       | Messages                                             | Output                 |
| ------- | -------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------- |
| bagel   | name `@string`                                                                   | name()                                               | `@string`              |
| basket  | itemList`(@array[@item])`, price `@array[@String]`, totalPrice `@array[@String]` | addItem(), price`(@Integer)`,totalPrice `(@Integer)` | `@itemList`, `@String` |
|         |                                                                                  |
# User Story 2 - Part 3


As a member of the public
So that I can maintain my sanity
I'd like to know if I try to remove an item that doesn't exist in my basket. In the same way, I want to know if I try to add an item with the same ID already in my basket.

**Objects**
- bagel
- basket
  
  

**Messages**

- removeItem()
- addItem()
- name()
- checkIfItemAdded()
- compareItemID()
 
**Properties**

- name `@String`
- Id `@String`
- itemList`(@Array[@item])`
- maxItems`@Integer`
  
**Output**

- `@itemList`
- `@string`
- `@Boolean`
- `@Integer`
  
<br><br>


| Objects | Properties                   | Messages                                         | Output                  |
| ------- | ---------------------------- | ------------------------------------------------ | ----------------------- |
| bagel   | name `@string`, Id `@String` | name(), compareItemID(`@itemList`)               | `@string`, `@Boolean`   |
| basket  | itemList`(@array[@item])`    | removeItem(), addItem(), checkIfItemAdded(`@ID`) | `@itemList`, `@Boolean` |
|         |
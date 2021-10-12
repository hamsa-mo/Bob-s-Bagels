# User Story 1

As a member of the public
So I can order a bagel when I want to
I'd like to add an item to my basket

As a member of the public,
So that I can change my order
I'd like to remove an item from my basket

**Objects**
- bagel
- basket
- customer
  
  

**Messages**

- addItem()
- name()
 
**Properties**

- name `@String`
- itemList`(@Array[@item])`
  
**Output**

- `@itemList`
- `@string`
  
<br><br>

| Objects | Properties                | Messages  | Output      |
| ------- | ------------------------- | --------- | ----------- |
| bagel   | name `@string`            | name()    | `@string`   |
| basket  | itemList`(@array[@item])` | addItem() | `@itemList` |
|         |



# User Story 2

As a member of the public,
So that I can not overfill my small bagel basket
I'd like to know when my basket is full when I try adding an item beyond my basket capacity.

**Objects**
- bagel
- basket
  
  

**Messages**

- addItem()
- name()
- checkIfFull()
 
**Properties**

- name `@String`
- itemList`(@Array[@item])`
- maxItems`@Integer`
  
**Output**

- `@itemList`
- `@string`
- `@Boolean`
  
<br><br>

| Objects | Properties                                    | Messages                            | Output                  |
| ------- | --------------------------------------------- | ----------------------------------- | ----------------------- |
| bagel   | name `@string`                                | name()                              | `@string`               |
| basket  | itemList`(@array[@item])`, maxItems`@Integer` | addItem(), checkIfFull(`@itemList`) | `@itemList`, `@Boolean` |
|         |                                               |
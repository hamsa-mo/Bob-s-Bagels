# User Story 3 part 1

As a member of the public,
So that I can know how much my bagels are,
I’d like to see the price of each item before I add it to my basket.

**Objects**
- bagel
- basket
  
  

**Messages**

- addItem()
- name()
- price`(@Integer)`
 
**Properties**

- name `@String`
- itemList`(@Array[@item])`
- price `@array[@String]`
  
  
**Output**

- `@itemList`
- `@string`

  
<br><br>

| Objects | Properties                                         | Messages                     | Output      |
| ------- | -------------------------------------------------- | ---------------------------- | ----------- |
| bagel   | name `@string`                                     | name()                       | `@string`   |
| basket  | itemList`(@array[@item])`, price `@array[@String]` | addItem(), price`(@Integer)` | `@itemList` |
|         |                                                    |
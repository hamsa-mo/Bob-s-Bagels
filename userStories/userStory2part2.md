# User Story 2 - Part 2


As a Bob's Bagels manager,
So that I can record more sales
I’d like to create baskets with larger capacity when I need to.

**Objects**
- bagel
- basket
  
  

**Messages**

- name()
- increaseCapacity()
 
**Properties**

- name `@String`
- maxItems`@Integer`
  
**Output**

- `@string`
- `@maxItems` 
  
<br><br>

| Objects | Properties         | Messages                      | Output      |
| ------- | ------------------ | ----------------------------- | ----------- |
| bagel   | name `@string`     | name()                        | `@string`   |
| basket  | maxItems`@Integer` | increaseCapacity(`@maxItems`) | `@maxItems` |
|         |                    |
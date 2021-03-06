import React from "react"
import HighlightedMarkdown from "../../components/HighlightedMarkdown"

const markdown = `
## Linked Lists

---

A linked list is a data structure where elements are linked with pointers, therefore not being contiguous in memory.\n
- Each link, or more commonly referred to as "node", contains a data field and a reference to the next node in the list.
- The last node will point to a null value.
- Variants of linked lists include singly (each node has one pointer) or doubly (each node has two pointers).

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

// a linked list node
typedef struct singly_ll_node
{
    int n;
    struct singly_ll_node *next;
} node;

node *create_node(int n)
{
    node *new_node = (node *)malloc(sizeof(node));
    if (!new_node)
        return (NULL);

    new_node->n = n;
    new_node->next = NULL;
    return new_node;
}

\`\`\`

---

### Add a node to a linked list

- Nodes are typically added to the head of a singly linked list as that is a O(1) operation.
- Adding anywhere else requires traversing the pointers to reach the desired location of insertion.

--- 

\`\`\`c
#include <stdio.h>
#include "lists.h"

node *add_node_to_head(node **head, const int n)
{
    node *new_node = create_node(n);
    new_node->next = *head;
    *head = new_node;
    return new_node;
}

int main()
{
    node *head = NULL;

    for (int i = 0; i < 5; i++)
        add_node(&head, i);
    print_list(head); // 4 -> 3 -> 2 -> 1 -> 0
    free_list(head);

    return 0;
}

\`\`\`

---

**Interview Question**

### Insert a node in a sorted linked list

---

\`\`\`c
#include <stdio.h>
#include "lists.h"

node *insert_node(node **head, int n)
{
    node *curr, *new_node;

    if (!head)
        return (NULL);
    new_node = create_node(n);
    curr = *head;
    // empty list
    if (!curr)
    {
        *head = new_node;
        return new_node;
    }
    // head insert
    if (n < curr->n)
    {
        new_node->next = curr;
        *head = new_node;
        return new_node;
    }
    // middle and tail insert
    while (curr->next && curr->next->n <= number)
        curr = curr->next;
    new_node->next = curr->next;
    curr->next = new_node;
    return new_node;
}

\`\`\`

---

### Remove a node in a linked list

- Removing the head of a list is a O(1) operation.
- If you want to remove a node from a given index, that will require traversing the list, making it a O(n) operation.

--- 

\`\`\`c
#include <stdio.h>
#include "lists.h"

int remove_node_at_index(node **head, unsigned int index)
{
    node *curr;
    node *next;
    unsigned int i;

    if (!head || !(*head))
        return (-1);
    curr = *head;
    // removing the current head
    if (index == 0)
    {
        *head = curr->next;
        free(curr);
        return (-1);
    }
    for (i = 0; curr && i < index - 1; i++)
        curr = curr->next;
    // out of bounds
    if (!curr || !(curr->next))
        return (-1);
    next = curr->next->next;
    free(curr->next);
    curr->next = next;
    return (0);
}

int main()
{
    // ...
    print_list(head); // 4 -> 3 -> 2 -> 1 -> 0
    remove_node_at_index(&head, 4);
    print_list(head); // 4 -> 3 -> 2 -> 1
    remove_node_at_index(&head, 0);
    print_list(head); // 3 -> 2 -> 1
    free_list(head);
    return 0;
}

\`\`\`

---

**Interview Question**

### Delete a node in the middle of a linked list
- Given only its reference

\`\`\`c
#include <stdio.h>
#include "lists.h"

void delete_mid_node(node *mid)
{
    node *tmp;

    tmp = mid->next;
    mid->n = tmp->n;
    mid->next = tmp->next;
    free(tmp);
}

int main()
{
    // ...
    print_list(head); // 5 -> 4 -> 3 -> 2 -> 1
    delete_mid_node(node_3);
    print_list(head); // 5 -> 4 -> 2 -> 1
    return 0;
}

\`\`\`

---

**Interview Question**

### Detect if a linked list has a cycle\n
- A cycle occurs when a node in a linked list points to a previous node in the list, therefore causing the linked list to loop.

\`\`\`c
#include <stdio.h>
#include "lists.h"

int has_cycle(node *head)
{
	node *t, *h;

	if (!head)
        return 0;
    t = head;
    h = head;
	while (h->next && h->next->next)
	{
		t = t->next;
		h = h->next->next;
		if (t == h)
			return 1;
	}
	return 0;
}

\`\`\`

---

_Author: Tu Vo_

`

const LinkedLists = () => {
  return <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
}

export default LinkedLists

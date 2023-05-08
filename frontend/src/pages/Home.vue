<template>
  <div class="mx-20 my-4">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-5xl font-black text-gray-900">Lists</h2>
      <Button icon-left="plus">New List</Button>
    </div>

    <div class="mt-2">
      <Card class="bg-gradient-to-r from-purple-200 via-purple-400 to-purple-700" title="General">
        <div>
          <ul>
            <li
              class="flex flex-row space-y-2 items-center justify-between"
              v-for="action in actions.data"
              :key="action.title"
            >
              <router-link :to="`/actions/${action.name}`">
                {{ action.title }}
              </router-link>
              <Button @click="completeAction(action.name)" icon="check" />
            </li>
          </ul>

          <Button class="h-10 w-auto bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 text-white" @click="addActionDialogShown = true" icon-left="plus"
            >New Action</Button
          >
        </div>
      </Card>
    </div>

    <Dialog 
      :options="{
        title: 'Add New Action',
        actions: [
          {
            label: 'Add Action',
            appearance: 'primary',
            handler: ({ close }) => {
              addAction()
              close() // closes dialog
            },
          },
          { label: 'Cancel' },
        ],
      }"
      v-model="addActionDialogShown"
    >
      <template #body-content>
        <div class="space-y-2">
          <Input
            v-model="action.title"
            type="text"
            required
            placeholder="Action Title"
            label="Title"
          />
          <Input
            v-model="action.category"
            label="List"
            type="select"
            :options="categoryOptions"
          />
          <Input
            v-model="action.date"
            type="date"
            placeholder="Date"
            label="Date"
          />
          <Input
            v-model="action.due_date"
            type="date"
            placeholder="Due Date"
            label="Due Date"
          />
          <Input
            v-model="action.description"
            type="textarea"
            placeholder="Description"
            label="Description"
          />
        </div>
      </template>
    </Dialog>
  </div>
  <div class="mx-20 my-4">
    <div class="flex flex-row items-center justify-between">
      <h2 class="text-5xl font-black text-gray-900">Users</h2>
      <Button icon-left="plus">New List</Button>
    </div>
    <div>
      <ul>
            <li
              class="flex flex-row space-y-2 items-center justify-between"
              v-for="user in users.data"
              :key="user.first_name"
            >
              
                {{ user.first_name }}
            
              
            </li>
          </ul>
      </div>

    </div>

</template>

<script setup>
import { Dialog, createListResource, Card, Input } from 'frappe-ui'
import { reactive, ref, computed } from 'vue'

const action = reactive({
  title: '',
  category: 'General',
})

const users = createListResource({
  doctype: 'User',
  fields: ['name', 'first_name'],
  limit: 100,

})
users.reload()

const addActionDialogShown = ref(false)

const actions = createListResource({
  doctype: 'Action',
  fields: ['name', 'title', 'status', 'description', 'date', 'due_date'],
  filters: {
    status: 'ToDo',
  },
  limit: 100,

})
actions.reload()

const categories = createListResource({
  doctype: 'Category',
  fields: ['name'],
  transform(categories) {
    return categories.map((c) => c.name)
  },
  cache: 'actions',
})
categories.reload()

const categoryOptions = computed(() => {
  if (categories.list.loading || !categories.data) {
    return []
  }
  return categories.data
})

const completeAction = (actionName) => {
  actions.setValue.submit({
    name: actionName,
    status: 'Completed',
    onSuccess() {
      actions.reload()
    },
  })
}

const addAction = () => {
  console.log(action)
  actions.insert.submit(action)
}
</script>
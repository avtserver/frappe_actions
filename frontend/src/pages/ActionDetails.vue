<template>
  <div class="mx-20 my-4" v-if="!action.get.loading">
    <div class="flex flex-row items-center justify-between">
      <h1 class="font-black text-5xl text-gray-900">{{ action.doc.title }}</h1>

      <div class="flex flex-row items-center space-x-1">
        <Button icon-left="arrow-left" @click="router.back()">Go back</Button>
        <Button
          @click="action.setValue.submit({ status: 'Archived' })"
          appearance="white"
          class="text-red-400 border-red-400"
          icon-left="trash"
          v-if="action.doc.status != 'Archived'"
          >Delete</Button
        >
        <Button
          @click="action.setValue.submit({ status: 'Completed' })"
          appearance="white"
          class="text-green-600 border-green-600"
          icon-left="check"
          v-if="action.doc.status === 'ToDo'"
          >Mark As Done</Button
        >
      </div>
    </div>
 <div class="mt-2">
      <Card class="bg-gradient-to-r from-sky-400 to-cyan-300" title="General">
        <div>
          <ul>
          <li>
            <li>
              <h1 class="font-black text-1xl text-gray-800">Current Status : {{ action.doc.status }}</h1>
              
              </li>
              <h1 class="font-black text-1xl text-gray-800">Date : {{ action.doc.date }}</h1>
              
              </li>
                <li>
              <h1 class="font-black text-1xl text-gray-800">Due Date : {{ action.doc.due_date }}</h1>
              
              </li>
                <li>
              <h1 class="font-black text-1xl text-gray-800">Description :<br> </h1>{{ action.doc.description }}

              
              </li>
                <li>
              <h1 class="font-black text-1xl text-gray-800">Category : {{ action.doc.category }}</h1>
              
              </li>
            
          </ul>

        </div>
      </Card>
    </div>
    <div>
      <!-- <TextEditor
        editor-class="prose-sm border max-w-none rounded-b-lg p-3 overflow-auto h-64 focus:outline-none"
        :fixedMenu="true"
        :content="content"
        @change="(val) => (content = val)"
      /> -->
    </div>
  </div>
  <LoadingIndicator v-else class="w-6 text-blue-500" />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Card, Input, TextEditor, createDocumentResource, LoadingIndicator } from 'frappe-ui'

const router = useRouter()
const props = defineProps(['name'])
const content = ref('')

const action = createDocumentResource({
  doctype: 'Action',
  name: props.name,
})

action.reload()
</script>
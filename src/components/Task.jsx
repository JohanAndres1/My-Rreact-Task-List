import { useState } from 'react';
import { Box, Stack, Checkbox, Input, Flex, Button } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

export default function Task({ title, description, completed, toggleCompleted, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleToggleComplete = () => {
    toggleCompleted({ title, completed: !completed });
  };

  const handleDelete = () => {
    deleteTask(title);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(title, newTitle, newDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Box p="4" mb="4" borderRadius="lg" bg='white' boxShadow="xl">
      {isEditing ? (
        <Stack spacing={4}>
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            variant="flushed"
            placeholder='Nuevo titulo'
          />
          <Input
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            variant="filled"
            placeholder='Nueva descripción'
          />

          <Flex justifyContent="space-around">
            <Button
              leftIcon={<CheckIcon />}
              colorScheme="teal"
              onClick={handleSave}
              aria-label="Save"
            >
              Gurardar
            </Button>
            <Button
              leftIcon={<CloseIcon />}
              colorScheme="red"
              onClick={handleCancel}
              aria-label="Cancel"
            >
              Cancelar
            </Button>
          </Flex>
        </Stack>
      ) : (
        <>
          <Flex direction="row" wrap="wrap" justifyContent="space-evenly">
            <Checkbox isChecked={completed} onChange={handleToggleComplete} mb="2" width="100%">
              {title}
            </Checkbox>
            <Input
              width="70%"
              readOnly
              value={description}
            />
            <Button
              leftIcon={<EditIcon />}
              iconSpacing={'unset'}
              colorScheme="teal"
              onClick={handleEdit}
              aria-label="Edit"
            />
            <Button
              leftIcon={<DeleteIcon />}
              iconSpacing={'unset'}
              colorScheme="red"
              onClick={handleDelete}
              aria-label="Delete"
            />
          </Flex>
        </>
      )}
    </Box>
  );
}

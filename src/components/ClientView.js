import React from 'react'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import {
    MdEdit as EditIcon,
    MdNotes as NoteIcon,
    MdDelete as DeleteIcon,
} from 'react-icons/md'
import Context from '@contexts/Context'

const ClientContainer = styled.li`
    padding: 8px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    list-style: none;

    :hover {
        background-color: #f8f8f8;
    }
`

const ActionsContainer = styled.div`
    display: flex;
    gap: 8px;
`

export default function ClientView(props) {
    const { clientName, clientId } = props
    const { modal, clientId: clientIdContext } = React.useContext(Context)
    const [hovered, setHovered] = React.useState(false)

    const openEdit = React.useCallback(() => {
        clientIdContext.setClientId(clientId)
        modal.setModal('edit')
    })

    const openNotes = React.useCallback(() => {
        clientIdContext.setClientId(clientId)
        modal.setModal('note')
    })

    const openDeleteConfirmation = React.useCallback(() => {
        clientIdContext.setClientId(clientId)
        modal.setModal('delete')
    })

    return (
        <ClientContainer
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Typography variant='subtitle1' component='span'>
                {clientName}
            </Typography>
            {hovered && (
                <ActionsContainer>
                    <IconButton size='small' onClick={openEdit}>
                        <EditIcon />
                    </IconButton>
                    <IconButton size='small' onClick={openNotes}>
                        <NoteIcon />
                    </IconButton>
                    <IconButton
                        size='small'
                        color='error'
                        onClick={openDeleteConfirmation}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ActionsContainer>
            )}
        </ClientContainer>
    )
}

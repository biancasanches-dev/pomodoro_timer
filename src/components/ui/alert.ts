import Swal from 'sweetalert2'

// Configure o SweetAlert2 e armazene em uma variável
export const cycleCompletedAlert = Swal.mixin({
    title: 'Ciclo Concluído!',
    text: 'Você completou seu ciclo de pomodoro.',
    icon: 'success',
    confirmButtonText: 'OK',
    customClass: {
        confirmButton: 'my-confirm-button-class', // Classe personalizada para o botão
    },
})

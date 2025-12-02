import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

// Expose ke window supaya bisa dipanggil dari mana saja
declare global {
    interface Window {
        toast: typeof MySwal.fire
        alert: typeof MySwal.fire
        confirm: typeof MySwal.fire
    }
}

// Toast mode (small, in the corner, auto close)
window.toast = (message: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'info') => {
    MySwal.fire({
        toast: true,
        position: 'top-end',
        icon,
        title: message,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: 'rgba(255,255,255,0.95)',
        color: '#1f2937',
        customClass: {
            popup: 'shadow-xl border border-gray-200',
        },
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
    })
}

// Standard alert (center screen)
window.alert = (title: string, text?: string, icon?: any) => {
    return MySwal.fire({
        icon,
        title,
        text,
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn',
        },
        buttonsStyling: false,
    })
}

// Confirm dialog
window.confirm = (title: string, text?: string) => {
    return MySwal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya',
        cancelButtonText: 'Batal',
        customClass: {
            confirmButton: 'btn btn-error',
            cancelButton: 'btn btn-ghost',
        },
        buttonsStyling: false,
    })
}

export default MySwal
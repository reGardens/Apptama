import Swal from 'sweetalert2'
import type { SweetAlertIcon, SweetAlertResult } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

// Expose ke window supaya bisa dipanggil dari mana saja
declare global {
    interface Window {
        showToast: (message: string, icon?: SweetAlertIcon) => void
        showAlert: (title: string, text?: string, icon?: SweetAlertIcon) => Promise<SweetAlertResult<SweetAlertIcon>>
        showConfirm: (title: string, text?: string) => Promise<SweetAlertResult<SweetAlertIcon>>
    }
}

// Toast mode (small, in the corner, auto close)
window.showToast = (message: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'info') => {
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
window.showAlert = (title: string, text?: string, icon?: SweetAlertIcon) => {
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
window.showConfirm = (title: string, text?: string) => {
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
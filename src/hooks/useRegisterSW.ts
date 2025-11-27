import { useEffect } from 'react'

export function useRegisterSW() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            // Tunggu sampai halaman selesai load biar tidak ganggu rendering
            window.addEventListener('load', () => {
                navigator.serviceWorker
                    .register('/sw.js')
                    .then((registration) => {
                        console.log('SW registered: ', registration)

                        // Deteksi update
                        registration.addEventListener('updatefound', () => {
                            const newWorker = registration.installing
                            if (newWorker) {
                                newWorker.addEventListener('statechange', () => {
                                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                        // Ada update baru → bisa kasih notifikasi ke user
                                        console.log('New version available!')
                                        // contoh: toast("Update tersedia! Refresh halaman.")
                                    }
                                })
                            }
                        })
                    })
                    .catch((registrationError) => {
                        console.log('SW registration failed: ', registrationError)
                    })
            })
        }
    }, [])
}
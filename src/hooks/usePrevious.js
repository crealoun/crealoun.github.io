import { useEffect, useRef } from 'react'

function usePrevious(value) {
    const ref = useRef()
    useEffect(() => void (ref.current = value), [value])
    return ref.current
}

export default usePrevious
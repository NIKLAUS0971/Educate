import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'


export const DropZoneComponents = ({ setFile }) => {
    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        if (acceptedFiles.length) {
            setFile(prev => [
                ...prev,
                ...acceptedFiles.map(file =>
                    Object.assign(file, { preview: URL.createObjectURL(file) }))
            ])
        }

    }, []);
    const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        multiple: false,
        accept: "image/jpeg,image/png",
    })
    return (
        <form>
            <div>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                </div>
            </div>
        </form>
    )
}
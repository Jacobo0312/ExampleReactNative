
export const BasicTypes = () => {
    const name: string = 'Jacobo';
    const age: number = 19;
    const isActive: boolean = true;
    const powers: string[] = ['Speed', 'Fly', 'Fire'];
    
    return (
        <>
        <h3>Basic Types</h3>
        {name}, {age}, {isActive ? 'Active' : 'Inactive'}
        <br />
        {powers.join(', ')}
        </>
    );
    };
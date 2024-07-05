

export let fName = localStorage.getItem('fName') || "Devharsh" ;

export let lName = localStorage.getItem('lName') || "Jha";

export function setValue(f,l)
{
    fName = f;
    lName = l;

    localStorage.setItem("fName",fName);
    localStorage.setItem("lName",lName);
}

// localStorage.clear();
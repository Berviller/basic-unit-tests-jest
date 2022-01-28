function mergeSortedArrays(t1, t2) {
    size1 = t1.length()
    size2 = t2.length()
    resultat = []

    for(i=0; i<size1; i++){
        if(t1[i]>t2[i]){
            resultat.append(t2[i])
        }
        else{
            resultat.append(t1[i])
        }
    }
    return resultat

}
module.exports = mergeSortedArrays
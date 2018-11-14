BST.prototype.isFull = function(){
    function check(node){
        var height = this.height();
        while (height >1){
            if (!node.left && node.right){
                return false;
            }else{
                return true;
            }
            if (this.left && !this.right || !this.left && this.right){
                return false;
            }else{
                var left = check(this.left);
                var right = check(this.right);
                height--;
            }
        }
        return left && right;
    }
    return check(this.root);
}
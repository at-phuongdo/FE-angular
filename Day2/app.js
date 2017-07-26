var $btn = document.getElementById("js-submit");
var $input = document.getElementById("js-name");
var $content = document.getElementById("js-member");
var Member = (function () {
    function Member(name) {
        this.name = name;
        this.domElement = document.createElement('li');
        this.domElement.className = 'list-group-item';
        this.addMember();
        this.addingButton();
    }
    Member.prototype.addMember = function () {
        var $span = document.createElement('span');
        $span.innerHTML = this.name;
        this.domElement.appendChild($span);
    };
    Member.prototype.addButton = function () {
        var $delBtn = document.createElement('button');
        $delBtn.className = 'btn btn-danger btn-xs pull-right';
        $delBtn.innerHTML = 'Delete';
        this.domElement.appendChild($delBtn);
        $delBtn.addEventListener('click', function (event) {
            var $parentElement = event.target.parentNode;
            $content.removeChild($parentElement);
        });
    };
    return Member;
}());
$btn.addEventListener('click', function () {
    var name = $input.value;
    var member = new Member(name);
    $content.appendChild(member.domElement);
});

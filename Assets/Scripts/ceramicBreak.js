#pragma strict

public var brokenMug : GameObject;
private var dropHeight : float;

function Start () {
	dropHeight = transform.position.y; //initial height for now
}

function Update () {
}

function OnCollisionEnter(collision: Collision) {
	Debug.Log(dropHeight + ", " + transform.position.y);
	if (dropHeight - transform.position.y > 1) {
    	BreakMug(gameObject);
    	if (collision.gameObject.tag == "mug") {
    		BreakMug(collision.gameObject);
    	}
    }
}

function BreakMug(mug: GameObject) {
	Instantiate(brokenMug, mug.transform.position, mug.transform.rotation);
    Destroy(mug);
}

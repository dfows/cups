#pragma strict

public var brokenMug : GameObject;
var dropHeight : float;
private var numCollisions: int;
private var collided : GameObject;

function Start () {
	setDropHeight();
}

function setDropHeight() {
    dropHeight = transform.position.y; //initial height for now
}

function LateUpdate () {
	if (numCollisions > 0) {
		BreakMug(gameObject);
		if (collided) {
			BreakMug(collided);
		}
	}
}

function OnCollisionEnter(collision: Collision) {
    // we need to do only one collision per mug
    // how about we break mug after we process all the collisions

	if (dropHeight - transform.position.y > 2) {
    	numCollisions++;
    	if (collision.gameObject.tag == "mug") {
    		collided = collision.gameObject;
    	}
    }
}

function BreakMug(mug: GameObject) {
	Instantiate(brokenMug, mug.transform.position, mug.transform.rotation);
    Destroy(mug);
}

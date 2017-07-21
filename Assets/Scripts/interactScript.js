#pragma strict

var grabbed : Transform;
private var grabbableMask : LayerMask;

function Start() {
  grabbed = null;
  grabbableMask = LayerMask.GetMask ("Grabbable");
}

function LateUpdate() {
  if (grabbed) {
  	var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
 	grabbed.position = ray.origin + ray.direction;
  }
}

function OnMouseDown() {
  var hit : RaycastHit;
  var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
  if (Physics.Raycast(ray, hit, Mathf.Infinity, grabbableMask)) {       
    grabbed = hit.transform;
    grabbed.position = ray.origin + ray.direction;
  }
}

function OnMouseUp() {
  if (grabbed) {
	  grabbed.position = new Vector3(grabbed.position.x, grabbed.position.y, grabbed.position.z + 1);
	  grabbed.GetComponent(ceramicBreak).setDropHeight();
	  grabbed = null;
  }
}
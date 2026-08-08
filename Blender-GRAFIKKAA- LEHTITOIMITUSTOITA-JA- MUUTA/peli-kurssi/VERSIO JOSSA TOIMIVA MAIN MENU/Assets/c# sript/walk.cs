using UnityEngine;
using System.Collections;

public class walk : MonoBehaviour{

    Animator anim;

    private void Start()
    {
        anim = GetComponent<Animator>();
    }


    void Update()

    {
        Movement();

        
    }

    void Movement()
    {
        if (Input.GetKey(KeyCode.D))
        {
            transform.Translate(Vector2.right * 3f * Time.deltaTime);
            transform.localScale = new Vector3(1, 1, 1);
            anim.SetBool("Walk", true);
        }
        else if (Input.GetKey(KeyCode.A))
        {
            transform.Translate(-Vector2.right * 3f * Time.deltaTime);
            transform.localScale = new Vector3(-1, 1, 1);
            anim.SetBool("Walk", true);
        }
        else
        {
            anim.SetBool("Walk", false);

        }
    }
            
}


    
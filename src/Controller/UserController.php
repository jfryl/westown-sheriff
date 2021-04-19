<?php

namespace App\Controller;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\TwigBundle\DependencyInjection\TwigExtension;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use App\dobToAge;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

/**
 * Class UserController
 * @Route("/profil")
 */
class UserController extends AbstractController
{

    /**
     * @Route("/", name="user_profil")
     */
    public function index(): Response
    {
       /* $loader= new FilesystemLoader('/templates');
        $twig = new Environment($loader);
        $twig->addFilter('age', new dobToAge());*/
        return $this->render('user/index.html.twig', [
            'user' => $this->getUser(),
        ]);
    }

}

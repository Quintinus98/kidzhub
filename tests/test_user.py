import unittest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import storage
from models.user import User
from models.engine.storage import Base
from werkzeug.security import generate_password_hash


class TestUserModel(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        """Setup a temporary in-memory database and session for testing"""
        cls.engine = create_engine("sqlite:///:memory:")
        Base.metadata.create_all(cls.engine)
        cls.Session = sessionmaker(bind=cls.engine)

    @classmethod
    def tearDownClass(cls):
        """Tear down the database after testing"""
        Base.metadata.drop_all(cls.engine)

    def setUp(self):
        """Setup a new session for each test"""
        self.session = self.Session()

    def tearDown(self):
        """Close the session after each test"""
        self.session.close()

    def test_create_user(self):
        """Test creating a new user"""
        user = User(
            firstname="John",
            lastname="Doe",
            email="john.doe@example.com",
            username="johndoe",
            password="password123",
        )
        storage.add(user)
        storage.save()
        # self.session.add(user)
        # self.session.commit()

        queried_user = (
            self.session.query(User).filter_by(username="johndoe").first()
        )
        self.assertIsNotNone(queried_user)
        self.assertEqual(queried_user.firstname, "John")
        self.assertEqual(queried_user.lastname, "Doe")
        self.assertEqual(queried_user.email, "john.doe@example.com")
        self.assertTrue(queried_user.verify_password("password123"))

    def test_unique_email(self):
        """Test unique email constraint"""
        user1 = User(
            firstname="Jane",
            lastname="Doe",
            email="jane.doe@example.com",
            username="janedoe",
            password="password123",
        )
        self.session.add(user1)
        self.session.commit()

        user2 = User(
            firstname="John",
            lastname="Smith",
            email="jane.doe@example.com",  # Duplicate email
            username="johnsmith",
            password="password123",
        )
        self.session.add(user2)
        with self.assertRaises(Exception):
            self.session.commit()


if __name__ == "__main__":
    unittest.main()
